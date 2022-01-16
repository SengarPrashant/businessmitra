const withImages = require('next-images')
const nextConfig = {
    serverRuntimeConfig: {
      // Will only be available on the server side
      apiBaseUrl:process.env.API_BASE_URL
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      apiBaseUrl:process.env.API_BASE_URL
    },
    env: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
  }
 
  const config = {
    ...nextConfig,
    webpack: webpackConfig => webpackConfig,
  }

  module.exports = withImages(config);