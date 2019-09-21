const merge = require('webpack-merge');
const baseConfig = require("./base");

const config = merge(baseConfig, {
    devtool: "inline-source-map",
    stats: {
        colors: true,
        children: false,
        chunks: false,
        chunkModules: false,
        modules: false
    },
    devServer: {
        compress: true,
        clientLogLevel: 'silent',
        port: 9000,
        historyApiFallback: true,
        stats: {
            chunks: false,
            children: false,
            colors: true,
            chunkModules: false,
            modules: false
        }
    }
});

module.exports = config;