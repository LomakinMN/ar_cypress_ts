import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://kontaktnaya-forma.testograf.ru",
  },
});