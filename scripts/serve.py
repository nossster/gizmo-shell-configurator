#!/usr/bin/env python3
"""Serve Gizmo Shell Configurator and open it in the default browser."""

from __future__ import annotations

import argparse
import functools
import mimetypes
import sys
import threading
import webbrowser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[1]


class ConfiguratorRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self) -> None:
        if Path(self.path.split("?", 1)[0]).suffix in {".html", ".js", ".css", ".json"}:
            self.send_header("Cache-Control", "no-cache")
        super().end_headers()


class ConfiguratorHttpServer(ThreadingHTTPServer):
    def handle_error(self, request, client_address) -> None:
        error = sys.exc_info()[1]
        if isinstance(error, (BrokenPipeError, ConnectionResetError)):
            return
        super().handle_error(request, client_address)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--bind", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8920)
    parser.add_argument("--no-browser", action="store_true")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    mimetypes.add_type("application/wasm", ".wasm")
    mimetypes.add_type("application/octet-stream", ".dll")
    mimetypes.add_type("application/octet-stream", ".blat")

    handler = functools.partial(ConfiguratorRequestHandler, directory=str(PROJECT_ROOT))
    server = ConfiguratorHttpServer((args.bind, args.port), handler)
    url = f"http://{args.bind}:{args.port}/"

    runtime_marker = PROJECT_ROOT / "real-client" / "configurator-runtime.json"
    if not runtime_marker.is_file():
        print("Warning: Real Host.Web runtime is not synchronized; Demo Preview remains available.")

    print(f"Gizmo Shell Configurator: {url}")
    print("Press Ctrl+C to stop the local server.")
    if not args.no_browser:
        threading.Timer(0.5, webbrowser.open, args=(url,)).start()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
