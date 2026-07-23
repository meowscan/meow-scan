const CACHE_NAME = 'meow-scan-v2';
const urlsToCache = [
  '/miau-scan/',
  '/miau-scan/index.html',
  '/miau-scan/manifest.json',
  '/miau-scan/icone-192.png',
  '/miau-scan/icone-512.png'
  // Dica: Adicione aqui também os caminhos do seu CSS e JavaScript principal depois
];

// Instala o Service Worker e salva os arquivos no cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Ativa o Service Worker e limpa caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Intercepta as requisições: Tenta a rede primeiro, se estiver offline, pega do cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
