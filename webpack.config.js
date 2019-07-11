/**
 * @author Omar Makled <omar.makled@gmail.com>
 */
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    entry: "./assets/main.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "public/assets")
    },
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                'css-loader',
                'sass-loader',
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css',
        })
    ]
};