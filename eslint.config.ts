import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig({
  files: ["**/*.ts"],
  ignores: ["dist/**", "node_modules/**", "coverage/**"],
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
});
