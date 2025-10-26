const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "../components/Navbar": path.resolve(__dirname, "src/mocks/Navbar.jsx"),
      "../components/Footer": path.resolve(__dirname, "src/mocks/Footer.jsx"),
    },
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
};
