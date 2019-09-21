const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack")
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../Build'),
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.css']
  },
  module: {
    rules: [
        {
            test: /\.(ts|tsx)$/,
            enforce: 'pre',
            use: [
                {
                    loader: 'eslint-loader',
                    options: {
                        emitError: true,
                        // emitWarning: true,
                        extensions: [
                            '.js',
                            '.jsx',
                            '.ts',
                            '.tsx'
                        ]
                    }
                }
            ]
        },
        {
            test: /\.(ts|tsx)?$/,
            loader: "awesome-typescript-loader",
            exclude: /node_modules/,
            options: {
                useBabel: true,
                babelCore: "@babel/core"
            }
        },
        {
            test: /\.css$/i,
            use: ['style-loader'],
        },
        {
            test: /\.css$/i,
            use: ['css-modules-typescript-loader'],
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|jpeg)$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[ext]',
            outputPath: 'images'
          }
        },
        {
            test: /\.css$/i,
            loader: 'css-loader',
            options: {
                sourceMap: true,
                modules: {
                  // getLocalIdent: (context, localIdentName, localName, options) => {
                  //   console.log(localIdentName, localName, options)
                  //   return 'whatever_random_class_name';
                  // }
                    localIdentName: '[folder][name]__[local]--[hash:base64:5]',
                },
            },
        },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};