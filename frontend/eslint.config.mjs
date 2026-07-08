import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // ignore unused vars
      "react-hooks/exhaustive-deps": "off", // ignore unnecessary deps
      "prefer-const": "warn", // don’t break build, just warn
      "@next/next/no-img-element": "off", // allow <img>
    },
  },
];

export default eslintConfig;

