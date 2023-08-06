import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          blue: {
            100: { value: "#caf0f8" },
            200: { value: "#90e0ef" },
            300: { value: "#00b4d8" },
            400: { value: "#0077b6" },
            500: { value: "#03045e" },
          },
        },
        fonts: {
          body: { value: "system-ui, sans-serif" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
