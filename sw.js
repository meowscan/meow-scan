const CACHE_NAME = 'meowscan-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/obra.html', // <--- OBRIGATÓRIO PARA A TELA DA OBRA ABRIR OFFLINE
  '/lersuasobrasaquinameowscan.html',
  '/generos.html',
  '/biblioteca.html',
  '/parcerias.html',
  '/perfil.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});
