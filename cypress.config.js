const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      projectId: "je2g7d",
    video: false,
    baseUrl: 'https://parabank.parasoft.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
