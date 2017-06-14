import path from 'path';

export default {
    devtool: 'source-map',
    entry: [
        './client/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            // js
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                include: [path.join(__dirname, 'client'),
                path.join(__dirname, 'server/shared')]
            },
            // CSS
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },

            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            }
        ]
    },
    node: {
        net: 'empty',
        dns: 'empty'
    }
};