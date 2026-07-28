FROM python:3.12-alpine

WORKDIR /app

COPY . .

RUN addgroup -S configurator \
  && adduser -S configurator -G configurator \
  && chown -R configurator:configurator /app

USER configurator

ENV PORT=8920

EXPOSE 8920

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD python -c "import os, urllib.request; urllib.request.urlopen(f'http://127.0.0.1:{os.environ.get(\"PORT\", \"8920\")}/', timeout=3).read(1)"

CMD ["sh", "-c", "python scripts/serve.py --bind 0.0.0.0 --port ${PORT:-8920} --no-browser"]
