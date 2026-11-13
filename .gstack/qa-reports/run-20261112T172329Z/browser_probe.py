"""Local synthetic browser evidence recorder; drives only the documented gstack CLI."""
import json
import pathlib
import subprocess
import sys
import time

ROOT = pathlib.Path(__file__).resolve().parent
BROWSER = "/Users/vector/.agents/skills/gstack/browse/dist/browse"
GUARD = "/Users/vector/.agents/skills/gstack/bin/gstack-qa-deadline"
args = sys.argv[1:]
command = ["bun", GUARD, "run", str(ROOT / "deadline.json"), "--", BROWSER, *args]
records = sorted(ROOT.glob("probe-*.json"))
number = len(records) + 1
if records:
    previous = json.loads(records[-1].read_text())
    checkpoint = {
        "observationCommand": previous["command"],
        "observed": previous["stdout"],
        "hypothesis": "继续检查当前流程的下一步或复现同一异常，保留原始观察与命令。",
        "nextCommand": command,
    }
    (ROOT / f"exploration-{number:03}.json").write_text(json.dumps(checkpoint, ensure_ascii=False, indent=2))
started = time.monotonic()
result = subprocess.run(command, capture_output=True, text=True, timeout=65)
record = {"command": command, "stdout": result.stdout, "stderr": result.stderr,
          "exitCode": result.returncode, "elapsedSeconds": round(time.monotonic() - started, 3)}
(ROOT / f"probe-{number:03}.json").write_text(json.dumps(record, ensure_ascii=False, indent=2))
print(f"EVIDENCE=probe-{number:03}.json")
print(result.stdout)
if result.stderr:
    print(result.stderr, file=sys.stderr)
sys.exit(result.returncode)
