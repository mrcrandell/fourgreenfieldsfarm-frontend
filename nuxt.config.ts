// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // ...
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-proxy'
  ],
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage'
  },
  // Proxy
  proxy: {
    options: {
      target: process.env.API_URL, 
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        '^/api/': '/',
      },
      pathFilter: [
        '/api/',
      ],
    }
  },
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: '123',
    // Public keys that are exposed to the client
    public: {
      appUrl: process.env.APP_URL || '/'
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/_variables.scss";
            @import "@/assets/scss/_mixins.scss";
          `
        }
      }
    }
  }
  /* vite: {
    server: {
        proxy: {
            '/api': {
              target: process.env.API_URL, 
              ws: true,
              changeOrigin: true,
              // pathRewrite: {'^/blog-api' : '/'}
              rewrite: (path) => path.replace('/api', '/')
            }
        }
    }
  } */
})
