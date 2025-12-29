import nextConfig from "eslint-config-next";

const config = [
  ...nextConfig,
  {
    rules: {
      "react/jsx-props-no-spreading": "off"
    }
  }
];

export default config;
