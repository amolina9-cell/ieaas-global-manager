export default defineConfig(() => {
  return {
    base: "/ieaas/",
    plugins: [react(), tailwindcss()],

    build: {
      outDir: "dist/ieaas",
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },

    server: {
      hmr: process.env.DISABLE_HMR !== "true",
      watch: process.env.DISABLE_HMR === "true" ? null : {},
    },
  };
});
