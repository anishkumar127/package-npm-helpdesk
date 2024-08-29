// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);

// const __dirname = path.dirname(__filename);

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "your-component-library.js",
//     library: "YourComponentLibrary",
//     libraryTarget: "umd",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env", "@babel/preset-react"],
//           },
//         },
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".js", ".css"],
//   },
// };
// const path = require("path");

// module.exports = {
//   entry: "./src/main.jsx",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "your-component-library.js",
//     library: "YourComponentLibrary",
//     libraryTarget: "umd",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env", "@babel/preset-react"],
//           },
//         },
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".js", ".css"],
//   },
// };

// 
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default {
  entry: "./src/main.jsx", // Update if your entry file is different
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "anish-comments-page-cubiclogics.js",
    library: "AnishCommentsPageCubiclogics",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Updated to handle both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"], // Add .jsx here
  },
};
