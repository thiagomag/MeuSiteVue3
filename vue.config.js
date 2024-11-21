const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    proxy: {
      "/meu-site-backend": {
        target: "http://localhost:8081", // URL do back-end
        changeOrigin: true,
      },
    },
  },
};