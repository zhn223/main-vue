module.exports = {
  //关闭eslint自动检测
  lintOnSave: false,
  //配置scss编译
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./src/styles/main.scss";`
      },
    }
  }
}