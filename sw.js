const CACHE = 'oleoflores-v1';
const ASSETS = [
  './potencial_aceite.html',
  './dashboard.html',
  './manifest.json',
  './jjpz.jpg'
];

// Instalar: guarda los archivos principales en caché
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// Activar: limpia cachés viejas
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: red primero, si falla usa caché (ideal para datos en tiempo real)
self.addEventListener('fetch', e => {
  // Firebase y APIs externas: siempre red, sin caché
  if (e.request.url.includes('firestore') ||
      e.request.url.includes('googleapis') ||
      e.request.url.includes('gstatic') ||
      e.request.url.includes('cdn.jsdelivr')) {
    return;
  }

  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Guarda copia fresca en caché
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
