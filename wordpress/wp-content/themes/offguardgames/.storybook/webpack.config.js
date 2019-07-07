const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.twig$/,
      loader: "twig-loader"
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: "style-loader",
          options: { sourceMap: true }
        },
        {
          loader: "css-loader",
          options: { sourceMap: true }
        },
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true
          }
        }
      ],
      include: path.resolve(__dirname, "not_exist_path")
    }
  );

  return config;
};
