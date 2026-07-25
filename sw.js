const CACHE_NAME = 'meowscan-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/obra.html',
  '/lersuasobrasaquinameowscan.html',
  '/generos.html',
  '/biblioteca.html',
  '/parcerias.html',
  '/perfil.html'
];

// 1. Instalação: Salva as páginas na memória
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 2. Ativação: Limpa caches antigos quando você atualizar o site
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. Busca (OBRIGATÓRIO): Entrega as páginas salvas se o usuário estiver offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Se achou no cache (offline), usa o arquivo salvo. Se não, busca na internet.
      return cachedResponse || fetch(event.request);
    })
  );
});
