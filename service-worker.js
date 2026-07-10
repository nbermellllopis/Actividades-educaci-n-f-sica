const CACHE_NAME = 'cuestionario-pwa-v1';
const APP_SHELL = [
  './',
  './index.html',
  './alimentacion.html',
  './cuestionario.html',
  './cuestionario_habitos_saludables.html',
  './huesos.html',
  './musculos.html',
  './musculos_posteriores.html',
  './styles.css',
  './script.js',
  './manifest.json',
  './pwa-register.js',
  './images/agua.png',
  './images/arroz.png',
  './images/berengena.png',
  './images/brocoli.png',
  './images/carne_roja.png',
  './images/celebrando.jpg',
  './images/cerebro.jpg',
  './images/embutido.png',
  './images/esqueleto.jpg',
  './images/esqueleto_huesos.png',
  './images/fresa.png',
  './images/frutos_secos.png',
  './images/helado.png',
  './images/huesos.jpg',
  './images/huevos.png',
  './images/icon-192.png',
  './images/icon-512.png',
  './images/icono.png',
  './images/leche.png',
  './images/levantando-vaso.jpg',
  './images/musculos-cuerpo.svg',
  './images/musculos-frente.jpg',
  './images/musculos_delante.png',
  './images/musculos_detras.png',
  './images/nino.jpg',
  './images/pan.png',
  './images/pasta.png',
  './images/pescado.png',
  './images/piramide.png',
  './images/platano.png',
  './images/pollo.png',
  './images/queso.png',
  './images/sandia.png',
  './images/zanahoria.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() =>
        caches.match(event.request).then((response) => response || caches.match('./index.html'))
      )
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
        return networkResponse;
      });
    })
  );
});