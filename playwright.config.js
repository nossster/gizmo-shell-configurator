const { defineConfig } = require('playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  outputDir: '/tmp/gizmo-shell-configurator-test-results',
  timeout: 30_000,
  fullyParallel: false,
  reporter: 'line',
  use: {
    baseURL: 'http://127.0.0.1:8923',
    headless: true,
  },
  webServer: {
    command: 'python3 -m http.server 8923 --bind 127.0.0.1',
    url: 'http://127.0.0.1:8923',
    reuseExistingServer: true,
    timeout: 30_000,
  },
});
