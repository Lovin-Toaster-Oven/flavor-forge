// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.cloudinary.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove /api from the URL
      },
    }),
  );
};
