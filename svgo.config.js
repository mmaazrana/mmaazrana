module.exports = {
  plugins: [
    "preset-default", // built-in plugins enabled by default
    "prefixIds", // enable built-in plugins by name
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
  ],
};
