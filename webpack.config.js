'use strict';

const gulpConfig = require('./gulpconfig'),
    webpack = require('webpack');

module.exports = function(env) {
    const config = {
        context: __dirname + '/assets',
        entry: {
            desktop: './common',
            mobile: './common-mobile'
        },
        output: {
            path: __dirname + '/public',
            filename: '[name].bundle.js',
            library: '[name]'
        },
        devtool: env === 'development' ? 'cheap-inline-module-source-map' : null,
        module: {
            loaders: [{
                test: /\.js$/,
                include: __dirname + '/assets',
                loader: 'babel'
            }],
            noParse: [
                /owl.carousel\/dist\/owl.carousel/
            ]
        },
        resolve: {
            modulesDirectories: [
                __dirname + '/public/node_modules',
                __dirname + '/assets/blocks',
                'node_modules'
            ],
            extensions: ['', '.js']
        },
        plugins: []
    };

    if (env === 'production') {
        const banner = gulpConfig.banner.replace(
            '<%= new Date().toISOString().split("T")[0] %>', new Date().toISOString().split('T')[0]);

        config.plugins.push(
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.BannerPlugin(banner, {
                raw: true
            })
        );
    }

    return config;
};
