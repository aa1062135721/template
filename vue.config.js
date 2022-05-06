module.exports = {
  publicPath: './',
  devServer: {
    port: 8081, // 启动端口
    host: "0.0.0.0",
    proxy: {
      '/api': { //此处要与 /services/api.js 中的 API_PROXY_PREFIX 值保持一致
        target: process.env.VUE_APP_API,//要跨域的域名 目标地址
        changeOrigin: true,//是否开启跨域  是否更改源路径
        pathRewrite: {
          '^/api': '',// /api/ / 凡是/api开头的地址都可以跨域
        }
      }
    }
  }
}
