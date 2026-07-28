const { defineConfig } = require('playwright/test');

const python = process.env.PYTHON || 'python3';
const useManagedWebServer = process.env.PLAYWRIGHT_NO_WEBSERVER !== '1';

module.exports = defineConfig({
  testDir: './tests',
  outputDir: './test-results',
  timeout: 30_000,
  fullyParallel: false,
  reporter: 'line',
  use: {
    baseURL: 'http://127.0.0.1:8923',
    headless: true,
  },
  webServer: useManagedWebServer ? {
    command: `${python} scripts/serve.py --port 8923 --no-browser`,
    url: 'http://127.0.0.1:8923',
    reuseExistingServer: true,
    timeout: 30_000,
  } : undefined,
});
