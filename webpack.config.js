module.exports = {
    // webpack starts from index.js file under src/
    entry: "./src/index.js",
    // then bundle all modules in that file into public/bundle.js
    output: {
        path: __dirname +  '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            // every file that ends with .js => run babel loader
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    }
};