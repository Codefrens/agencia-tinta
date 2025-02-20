// eslint-disable-next-line @typescript-eslint/no-require-imports
const { resolve } = require("path");

module.exports = {
  plugins: [
    "postcss-nested",
    [
      "postcss-functions",
      {
        functions: {
          pxToRem: (value) => {
            return `${Number.parseFloat((Number(value) / 16).toFixed(4))}rem`;
          },
        },
      },
    ],
    [
      "postcss-mixins",
      {
        mixinsDir: resolve(__dirname, "./styles/helpers/mixins/"),
      },
    ],
  ],
};
