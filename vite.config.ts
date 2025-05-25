import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Custom AnimeLens development helper - simplified version
const animeLensDevHelper = () => {
  return {
    name: 'animelens-dev-helper',
    transformIndexHtml(html: string) {
      // Add development banner in dev mode
      return html.replace(
        '<body>',
        `<body>
          <div id="animelens-dev-banner" style="position: fixed; top: 0; left: 0; right: 0; background: linear-gradient(90deg, #7c3aed, #2563eb); color: white; text-align: center; padding: 4px 8px; font-size: 12px; z-index: 9999; font-family: system-ui;">
            🚀 AnimeLens Development Mode - AI Anime Detection
          </div>
          <style>
            body { padding-top: 28px !important; }
          </style>`
      );
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && animeLensDevHelper(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
