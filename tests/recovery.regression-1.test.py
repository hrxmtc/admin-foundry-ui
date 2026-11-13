"""Regression: ISSUE-001/002/003, found by /qa on 2026-11-13.

Local report (not versioned): .gstack/qa-reports/run-20261112T172329Z/qa-report-localhost-2026-11-13.md
Run with Python's standard library and the installed gstack /browse binary.
Uses an owned localhost origin and tab; no packages or production seams.
"""
import functools
import http.server
import json
import os
import pathlib
import subprocess
import threading
import unittest

BROWSER = os.environ.get("GSTACK_BROWSER", str(pathlib.Path.home() / ".agents/skills/gstack/browse/dist/browse"))
PROJECT = pathlib.Path(__file__).resolve().parents[1]


class SilentHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *_):
        pass


class RecoveryRegression(unittest.TestCase):
    @classmethod
    def browser(cls, *args):
        result = subprocess.run([BROWSER, *args], cwd=PROJECT, capture_output=True, text=True, timeout=20)
        if result.returncode or "ERROR:" in result.stdout:
            raise RuntimeError(result.stdout + result.stderr)
        return result.stdout.strip()

    @classmethod
    def js(cls, expression):
        return json.loads(cls.browser("js", "JSON.stringify(" + expression + ")"))

    @classmethod
    def setUpClass(cls):
        handler = functools.partial(SilentHandler, directory=str(PROJECT))
        cls.server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
        threading.Thread(target=cls.server.serve_forever, daemon=True).start()
        cls.url = f"http://127.0.0.1:{cls.server.server_port}/index.html"
        cls.browser("newtab", cls.url)

    @classmethod
    def tearDownClass(cls):
        cls.browser("closetab")
        cls.server.shutdown()
        cls.server.server_close()

    def setUp(self):
        self.js("(() => { MOYU.commands['choose-role']({id:'ST01'}); MOYU.navigate('tickets','TK6001'); return true; })()")

    def test_01_public_and_internal_drafts_are_independent(self):
        actual = self.js("""(() => {
          const edit=text=>{const el=document.querySelector('#reply-text');el.value=text;el.dispatchEvent(new Event('input',{bubbles:true}));};
          edit('对外：已查明权益，请确认到账');
          document.querySelector('[data-action="reply-mode"][data-value="internal"]').click();
          edit('内部：调查依据，只供员工交接');
          document.querySelector('[data-action="reply-mode"][data-value="public"]').click();
          return document.querySelector('#reply-text').value;
        })()""")
        self.assertEqual(actual, "对外：已查明权益，请确认到账", "内部草稿不能自动进入作者可见输入区")

    def test_02_reload_restores_object_filter_and_unsent_reply(self):
        self.js("""(() => {
          MOYU.filters.tickets={q:'续费',status:'处理中',page:1};
          const el=document.querySelector('#reply-text'); el.value='刷新后仍应保留的对外答复';
          el.dispatchEvent(new Event('input',{bubbles:true}));
          const status=document.querySelector('#reply-status'); status.value='待作者补充';
          status.dispatchEvent(new Event('change',{bubbles:true})); return true;
        })()""")
        self.browser("reload")
        actual = self.js("({page:MOYU.current.page,id:MOYU.current.id,q:MOYU.filters.tickets?.q,text:document.querySelector('#reply-text')?.value,status:document.querySelector('#reply-status')?.value})")
        self.assertEqual(actual, {"page":"tickets","id":"TK6001","q":"续费","text":"刷新后仍应保留的对外答复","status":"待作者补充"})
        self.js("(() => { MOYU.commands.back(); return true; })()")
        self.assertEqual(self.js("MOYU.current.page"), "overview")

    def test_03_internal_send_does_not_clear_or_expose_public_draft(self):
        actual = self.js("""(() => {
          MOYU.navigate('tickets','TK6001');
          const edit=text=>{const el=document.querySelector('#reply-text');el.value=text;el.dispatchEvent(new Event('input',{bubbles:true}));};
          edit('对外：继续保留的未发送说明');
          document.querySelector('[data-action="reply-mode"][data-value="internal"]').click();
          edit('内部：回归测试交接记录');
          document.querySelector('[data-action="send-reply"]').click();
          document.querySelector('[data-action="reply-mode"][data-value="public"]').click();
          return {draft:document.querySelector('#reply-text').value,
            internal:MOYU.find('tickets','TK6001').messages.filter(m=>m.text==='内部：回归测试交接记录').map(m=>m.who)};
        })()""")
        self.assertEqual(actual, {"draft":"对外：继续保留的未发送说明","internal":["internal"]})

    def test_04_search_filter_survives_reload_without_other_action(self):
        self.js("(() => { MOYU.navigate('tickets'); const el=document.querySelector('[data-filter=q]'); el.value='独立筛选恢复'; el.dispatchEvent(new Event('input',{bubbles:true})); return true; })()")
        self.browser("reload")
        self.assertEqual(self.js("document.querySelector('[data-filter=q]').value"), "独立筛选恢复")

    def test_05_role_drafts_and_logged_out_session_survive_reload(self):
        self.js("(() => { MOYU.commands['choose-role']({id:'ST02'}); MOYU.navigate('tickets','TK6001'); return true; })()")
        self.assertEqual(self.js("document.querySelector('#reply-text').value"), "", "切换员工不能继承其他员工草稿")
        self.browser("reload")
        self.assertEqual(self.js("MOYU.actor"), "ST02", "刷新不能自动切回负责人")
        self.js("(() => { MOYU.commands.logout(); return true; })()")
        self.browser("reload")
        self.assertFalse(self.js("MOYU.session"), "已退出的演示会话不应刷新后自动登录")


if __name__ == "__main__":
    unittest.main(verbosity=2)
