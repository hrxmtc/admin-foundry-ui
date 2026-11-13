"""Regression: WORKFLOW-001, found by /qa on 2026-11-13.

Local report (not versioned): .gstack/qa-reports/run-20261112T180013Z-workflows/qa-report-localhost-2026-11-13.md
Value: protects=keyboard continuity after ticket tab activation;
fails_when=rerender drops focus or every tab enters sequential navigation;
why_new=existing recovery tests cover text/storage, not keyboard focus;
seam=none; no_claim=screen-reader or cross-browser certification.
Reuses the existing isolated HTTP/browser fixture without adding dependencies.
"""
import pathlib
import runpy
import unittest

RecoveryFixture = runpy.run_path(str(pathlib.Path(__file__).with_name("recovery.regression-1.test.py")))["RecoveryRegression"]


class TicketTabRegression(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        RecoveryFixture.setUpClass()

    @classmethod
    def tearDownClass(cls):
        RecoveryFixture.tearDownClass()

    def setUp(self):
        RecoveryFixture.js("""(() => {
          document.querySelector('[data-nav="tickets"]').click();
          document.querySelector('[data-go="tickets"][data-id="TK6001"]').click();
          document.querySelector('[data-action="detail-tab"][data-value="public"]').click();
          return true;
        })()""")

    def test_01_keyboard_activation_preserves_focus_and_arrow_navigation(self):
        for key in ("Enter", "Space"):
            with self.subTest(key=key):
                RecoveryFixture.js("""(() => {
                  document.querySelector('[data-action="detail-tab"][data-value="public"]').click();
                  document.querySelector('[data-action="detail-tab"][data-value="internal"]').focus();
                  return true;
                })()""")
                RecoveryFixture.browser("press", key)
                actual = RecoveryFixture.js("({action:document.activeElement.dataset.action||null,value:document.activeElement.dataset.value||null})")
                self.assertEqual(actual, {"action": "detail-tab", "value": "internal"}, "激活后焦点必须保留在新渲染的页签")
                RecoveryFixture.browser("press", "ArrowLeft")
                actual = RecoveryFixture.js("({selected:document.querySelector('[data-action=detail-tab][aria-selected=true]').dataset.value,focus:document.activeElement.dataset.value,mode:document.querySelector('[data-action=reply-mode][aria-selected=true]').dataset.value})")
                self.assertEqual(actual, {"selected": "public", "focus": "public", "mode": "public"})

    def test_02_only_selected_detail_tab_is_in_sequential_tab_order(self):
        actual = RecoveryFixture.js("[...document.querySelectorAll('[data-action=detail-tab][role=tab]')].map(b=>({value:b.dataset.value,tabIndex:b.tabIndex}))")
        self.assertEqual(actual, [
            {"value": "public", "tabIndex": 0},
            {"value": "internal", "tabIndex": -1},
            {"value": "materials", "tabIndex": -1},
        ])


if __name__ == "__main__":
    unittest.main(verbosity=2)
