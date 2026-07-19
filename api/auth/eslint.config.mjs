import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
  },

  pluginJs.configs.recommended,

  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
];