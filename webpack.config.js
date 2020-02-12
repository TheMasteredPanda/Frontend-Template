const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");
module.exports = {
  entry: () => {
    let folders = fs
      .readdirSync("./src/scripts")
      .filter(file => fs.lstatSync(`./src/scripts/${file}`).isDirectory());

    let entries = {};
    for (let i = 0; i < folders.length; i++) {
      const folder = folders[i];
      let rootScripts = fs
        .readdirSync(`./src/scripts/${folder}`)
        .filter(file => {
          let splitFilePath = file.split(".");
          return ["js", "jsx"].includes(
            splitFilePath[splitFilePath.length - 1]
          );
        });

      for (let j = 0; j < rootScripts.length; j++) {
        const script = rootScripts[j];
        entries[script.split(".")[0]] = `./src/scripts/${folder}/${script}`;
      }
    }
    
    return entries;
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.(m?js|jsx)$/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html",
      filename: "index.html"
    })
  ]
};