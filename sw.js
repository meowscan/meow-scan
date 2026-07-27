const CACHE_NAME = 'meowscan-v2'; // Atualizamos a versão para forçar a limpeza do cache antigo
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/obra.html',
  '/lersuasobrasaquinameowscan.html',
  '/generos.html',
  '/biblioteca.html',
  '/parcerias.html',
  '/perfil.html',
  // Adicionando as fontes externas para cache inicial
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// 1. Instalação: Salva as páginas principais na memória
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 2. Ativação: Limpa caches antigos quando houver atualização (ex: mudou de v1 para v2)
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

// 3. Busca: Estratégia Stale-While-Revalidate
self.addEventListener('fetch', (event) => {
  // Ignora requisições do Firebase e extensões do Chrome (evita erros)
  if (
    event.request.url.includes('firebaseio.com') || 
    event.request.url.includes('identitytoolkit') ||
    event.request.url.startsWith('chrome-extension')
  ) {
    return;
  }

  // Apenas lida com requisições GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Faz a busca na rede em segundo plano para atualizar o cache
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        // Valida se a resposta foi sucesso (status 200) ou resposta de outro domínio (status 0)
        if (networkResponse && (networkResponse.status === 200 || networkResponse.status === 0)) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        console.log('Offline: Falha ao buscar na rede, utilizando o cache disponível.');
      });

      // Retorna o cache IMEDIATAMENTE (se existir). Se não, espera a resposta da rede.
      return cachedResponse || fetchPromise;
    })
  );
});
