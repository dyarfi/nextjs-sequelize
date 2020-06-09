module.exports = {
  env: {
    api: process.env.PORT + "api/",
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    //   mySecret: 'secret',
    //   secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    apiUrl: "api",
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: "/public",
  },
};
