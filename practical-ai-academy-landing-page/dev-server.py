#!/usr/bin/env python3
"""Local dev server for the AIYUBOVAN site.

Serves the project/ folder and mirrors the clean-URL rewrites from
project/vercel.json, so localhost behaves exactly like the live
Vercel deployment. Run: python3 dev-server.py [port]
"""
import http.server
import os
import sys
import urllib.parse

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "project")

REWRITES = {
    "/": "/Practical AI Academy.dc.html",
    "/what-you-will-learn": "/What You Will Learn.dc.html",
    "/apply": "/Application Guide.dc.html",
    "/consultation": "/One-to-One Consultation.dc.html",
    "/book-consultation": "/Book Consultation.dc.html",
    "/courses": "/Courses.dc.html",
    "/shop": "/Shop Preview.dc.html",
    "/privacy-policy": "/Privacy Policy.dc.html",
    "/terms-and-conditions": "/Terms and Conditions.dc.html",
    "/refund-policy": "/Return and Refund Policy.dc.html",
    "/how-to-update": "/How To Update.dc.html",
}


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def do_GET(self):
        parsed = urllib.parse.urlsplit(self.path)
        path = urllib.parse.unquote(parsed.path)
        if path in REWRITES:
            self.path = urllib.parse.quote(REWRITES[path]) + (
                "?" + parsed.query if parsed.query else ""
            )
        super().do_GET()

    def do_HEAD(self):
        self.do_GET()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4173
    server = http.server.ThreadingHTTPServer(("", port), Handler)
    print(f"AIYUBOVAN dev server: http://localhost:{port}/ (root: {ROOT})")
    server.serve_forever()
