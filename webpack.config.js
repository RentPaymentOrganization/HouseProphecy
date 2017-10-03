const merge = require('webpack-merge');
const baseConfig = require("./webpack-build/webpack.base.config");
const prodConfig = require("./webpack-build/webpack.prod.config");
const devConfig = require("./webpack-build/webpack.dev.config");


module.exports = (env) => {
    if (env === "production") {		
        return merge(baseConfig, prodConfig);
    }

    if (env === "development") {
        return merge(baseConfig, devConfig);
    }
}