var webpack = require('webpack');
var path = require('path');

const parentDir = path.join(__dirname, '../');
const multi = require('multi-loader');

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});
const PrettierWebPackPlugin = require("prettier-webpack-plugin");

const prettierPlugin=new PrettierWebPackPlugin({
    printWidth: 80,               // Specify the length of line that the printer will wrap on.
    tabWidth: 2,                  // Specify the number of spaces per indentation-level.
    useTabs: false,               // Indent lines with tabs instead of spaces.
    semi: true,                   // Print semicolons at the ends of statements.
    encoding: 'utf-8',            // Which encoding scheme to use on files
    extensions: [ ".js", ".jsx",".scss" ]  // Which file extensions to process
  })
module.exports = {
	entry: [
		path.join(__dirname, '../src/index.js')
    ],
	module: {
        rules: [
            {
			    test: /\.(js|jsx)$/,
				exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
				test: /\.scss$/,
                use: [{
                    loader: multi("style-loader", "css-loader", "scss-loader")
                }]
			}
		]
    },
    output: {
        path: __dirname + './../dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + './../dist',
        historyApiFallback: true,
        open: true,
        allowedHosts:[]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        htmlPlugin,
        prettierPlugin
    ]
}
