import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite me React chalane ke liye ye plugin zaroori hai
export default defineConfig({
  plugins: [react()],
});
