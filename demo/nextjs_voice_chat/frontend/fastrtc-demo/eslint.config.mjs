import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-unused-vars": "off",
      "no-explicit-any": "off",
      "no-console": "off",
      "no-debugger": "off",
      "eqeqeq": "off",
      "curly": "off",
      "quotes": "off",
      "semi": "off",
    },
  },
];

export default eslintConfig;
