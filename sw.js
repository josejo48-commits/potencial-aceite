const CACHE = 'oleoflores-v2';
const BASE = '/potencial-aceite/';
const ASSETS = [
  BASE + 'potencial_aceite.html',
  BASE + 'dashboard.html',
  BASE + 'manifest.json',
  BASE + 'jjpz.jpg'
];

self.addEventListener('install', e => {
  // Solo cachear si estamos en el dominio correcto
  if (!self.location.hostname.includes('github.io')) {
    self.skipWaiting();
    return;
  }
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Solo actuar si estamos en GitHub Pages
  if (!self.location.hostname.includes('github.io')) return;

  if (e.request.url.includes('firestore') ||
      e.request.url.includes('googleapis') ||
      e.request.url.includes('gstatic') ||
      e.request.url.includes('cdn.jsdelivr') ||
      e.request.url.includes('fonts.googleapis')) {
    return;
  }
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
