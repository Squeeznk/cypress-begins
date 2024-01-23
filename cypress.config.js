const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    testIsolation: false,
    video: true,
    videoCompression: 32
  }
});
