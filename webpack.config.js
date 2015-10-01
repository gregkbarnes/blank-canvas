module.exports = {
    entry: __dirname + "/src/FirstComponent.jsx",
    output: {
        path: __dirname + "/public/javascripts",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.css$/, loader: "style!css" 
            },
            
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel'
            }
        ]
    }
};