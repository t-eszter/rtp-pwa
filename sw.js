const CACHE_NAME = "minimal-pwa-v1";
const ASSETS = ["index.html", "manifest.json", "icons/icon-192.png", "extra.css"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
