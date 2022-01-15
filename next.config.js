module.exports = {
    serverRuntimeConfig: {
      // Will only be available on the server side
      apiBaseUrl:process.env.API_BASE_URL
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      apiBaseUrl:process.env.API_BASE_URL
    },
  }
  const withImages = require('next-images')
  module.exports = withImages()