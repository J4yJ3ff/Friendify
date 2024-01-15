const path = require("path");


module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
    },
    module: {
        rules:[{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules /
        }]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public")
        },
        port: 8080,
    },
    mode: "development",
    devtool: "eval-cheap-module-source-map"
}