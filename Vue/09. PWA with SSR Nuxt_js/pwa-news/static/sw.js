importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "pwa-news",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.80f2f14997b8e692d748.js",
    "revision": "d51fcd14101b7515243d678848b73f11"
  },
  {
    "url": "/_nuxt/layouts/default.a8e1e107cfde3019d190.js",
    "revision": "6aebd31b41fbe716d8c6cbae82457c00"
  },
  {
    "url": "/_nuxt/manifest.2322ce11f6de8a3c9cf6.js",
    "revision": "bfd53c52c3b00b594eb57776a0af2e86"
  },
  {
    "url": "/_nuxt/pages/index.c59c78956f7820e2b848.js",
    "revision": "003f95c95509a5cf0ec7f23e5da1dbd6"
  },
  {
    "url": "/_nuxt/vendor.23f6940a7db476a94a22.js",
    "revision": "704f60e36f96d05aa7257ad48a748de7"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

