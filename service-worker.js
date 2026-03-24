self.addEventListener('install', function(e) {
  console.log('Service Worker Installed');
});

self.addEventListener('fetch', function(e) {
  // basic fetch (no offline caching yet)
});