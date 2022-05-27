const path = require('path')
const webpackBaseConfig = {
    entry:path.join(__dirname,'../src/index'),
    output : {
        path:path.join(__dirname,'../dist'),
        filename: '[name].[fullhase:3].js'
    },
    resolve:{
        extension : ['.js','.jsx']
    },
    module: {
        rules:[
            {test:/\.js[x]/,
                use:'babel-loader'
            },
            {
                test:/\.(sc|c)ss/,
                use:'style-loader'
            }
        ]
    }

}

module.exports = webpackBaseConfig;