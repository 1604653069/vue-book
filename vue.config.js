module.exports = {
    devServer: {
        // 当前项目在开发调试阶段：会将任何位置请求（没有匹配到静态文件的请求）代理到 https://www.escook.cn
        proxy: 'http://localhost:9999'
    }
}