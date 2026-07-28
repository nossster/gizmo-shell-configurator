FROM mcr.microsoft.com/dotnet/sdk:6.0 AS real-client-builder

ARG GIZMO_CLIENT_UI_REPOSITORY=https://github.com/GAMP/Gizmo.Client.UI.git
ARG GIZMO_CLIENT_UI_REF=

WORKDIR /workspace

RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates git nodejs npm python3 \
  && rm -rf /var/lib/apt/lists/*

COPY . .

RUN git clone --recursive --shallow-submodules --depth 1 ${GIZMO_CLIENT_UI_REPOSITORY} /tmp/Gizmo.Client.UI \
  && if [ -n "${GIZMO_CLIENT_UI_REF}" ]; then \
    git -C /tmp/Gizmo.Client.UI fetch --depth 1 origin "${GIZMO_CLIENT_UI_REF}" \
    && git -C /tmp/Gizmo.Client.UI checkout FETCH_HEAD \
    && git -C /tmp/Gizmo.Client.UI submodule update --init --recursive --depth 1; \
  fi \
  && python3 scripts/build-real-client.py --source-root /tmp/Gizmo.Client.UI \
  && python3 scripts/sync-real-client.py --check --require-demo-login

FROM python:3.12-alpine

WORKDIR /app

COPY . .
COPY --from=real-client-builder /workspace/real-client ./real-client
COPY --from=real-client-builder /workspace/_framework ./_framework

RUN addgroup -S configurator \
  && adduser -S configurator -G configurator \
  && chown -R configurator:configurator /app

USER configurator

ENV PORT=8920

EXPOSE 8920

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD python -c "import os, urllib.request; urllib.request.urlopen(f'http://127.0.0.1:{os.environ.get(\"PORT\", \"8920\")}/', timeout=3).read(1)"

CMD ["sh", "-c", "python scripts/serve.py --bind 0.0.0.0 --port ${PORT:-8920} --no-browser"]
