const CACHE_NAME = 'your-app-cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/offline.html', // Create an offline page
  // Add other static assets to cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .catch(() => caches.match('/offline.html'));
      })
  );
});
