const WebpackAliyunOssPlugin = require('./oss');

module.exports = {
    outputDir: 'docs',
    productionSourceMap: false,

    css: {
        sourceMap: true
    },

    configureWebpack: {
        plugins: [
            new WebpackAliyunOssPlugin({
                enable: false
            })
        ]
    },

    devServer: {
        // development server port 8000
        port: 8080,
        // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
        // proxy: {
            // '/music':{
            //             //     target:'http://music.163.com',//接口的域名
            //             //     // secure:false,//如果是https接口，需要配置这个参数
            //             //     changeOrigin:true,//如果是接口跨越，需要进行这个参数配置
            //             //     pathRewrite:{
            //             //         '^/music':'/'
            //             //     }
            //             // },
            // '/musics':{
            //     target:'https://api.imjad.cn',//接口的域名
            //     secure:false,//如果是https接口，需要配置这个参数
            //     changeOrigin:true,//如果是接口跨越，需要进行这个参数配置
            //     pathRewrite:{
            //         '^/musics':'/'
            //     }
            // },
        // }
    },
    publicPath: './'
    // publicPath:process.env.NODE_ENV=="production"?"./":"/",  //打包配置，解决页面空白的配置方案。
};
