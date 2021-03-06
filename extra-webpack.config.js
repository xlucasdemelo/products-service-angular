const webpack = require('webpack');

module.exports = {
    plugins: [new webpack.DefinePlugin({
        'process.env': {
            SERVER: JSON.stringify(process.env.SERVER),
            JAVA_HOME: JSON.stringify(process.env.JAVA_HOME)
        }
    })]
}