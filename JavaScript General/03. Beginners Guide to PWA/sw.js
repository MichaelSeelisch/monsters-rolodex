// Use a cacheName for cache versioning
var cacheName = 'v1:static';

// During the installation phase, you'll usually want to cache static assets.
self.addEventListener('install', function(e) {
    // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
    e.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll([
          './',
          './css/build/style.min.css',
          './js/build/script.min.js',
          './js/build/vendor.min.js',
          './css/fonts/roboto.woff',
          './offline.html'
        ]).then(function() {
          self.skipWaiting();
        });
      })
    );
});

// When the browser fetches a URL…
self.addEventListener('fetch', function(event) {
    // … Either respond with the cached object or go ahead and fetch the actual URL
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          // Retrieve from cache
          return response;
        }
        // Fetch as normal
        return fetch(event.request);
      })
    );
});
