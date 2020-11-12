const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const gitRevisionPlugin = new GitRevisionPlugin();

const isDevelopment = process.env.NODE_ENV === 'development';

const mode = () => {
    if (isDevelopment) {
        return { mode: 'development' };
    }

    return { mode: 'none' };
};

const devtool = () => {
    if (isDevelopment) {
        return { devtool: 'inline-source-map' };
    }

    if (process.env.NODE_ENV === 'production') {
        return { devtool: 'source-map' };
    }

    return {};
};

const devServer = () => {
    if (isDevelopment) {
        return {
            devServer: {
                contentBase: './build',
                open: false,
            },
        };
    }

    return {};
};

module.exports = {
    ...mode(),
    ...devtool(),
    ...devServer(),

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    mangle: false,
                },
            }),
        ],
    },

    entry: './src/index.js',

    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: 'Knossonia',
            template: 'index.html',
            version: gitRevisionPlugin.commithash().slice(0, 7),
        }),
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: 'resources/',
                            outputPath: 'resources/',
                        },
                    },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)\/(?!geotic)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-proposal-private-methods',
                        ],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
};
