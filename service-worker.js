self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('pwa-cache').then(function(cache) {
            return cache.addAll([
                'index.html',
                'CalApp.html',
                'Zcal.html',
                'style.css',
                'calapp.js',
                'Zapp.js'
                'manifest.webmanifest'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
