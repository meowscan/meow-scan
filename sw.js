<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meow Scan</title>
  
  <!-- Configurações para PWA -->
  <link rel="manifest" href="/miau-scan/manifest.json">
  <meta name="theme-color" content="#ff4081">
  <link rel="icon" type="image/png" href="https://cdn-icons-png.flaticon.com/512/616/616430.png">
  
  <style>
    body {
      background-color: #121212;
      color: #ffffff;
      font-family: sans-serif;
      text-align: center;
      padding: 50px 20px;
    }
    h1 { color: #ff4081; }
    .status {
      margin-top: 20px;
      padding: 10px;
      border-radius: 8px;
      background-color: #1e1e1e;
      display: inline-block;
      font-size: 0.9em;
      color: #aaa;
    }
  </style>
</head>
<body>
  <h1>🐾 Meow Scan 🐾</h1>
  <p>Nosso app está em construção! Em breve novidades.</p>
  
  <div class="status" id="status">Verificando conexão...</div>

  <script>
    // Registro do Service Worker para funcionar offline e ser instalável
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/miau-scan/sw.js')
          .then((reg) => console.log('Service Worker registrado com sucesso!'))
          .catch((err) => console.log('Erro no Service Worker:', err));
      });
    }

    // Indicador simples de status de rede
    function updateOnlineStatus() {
      const statusEl = document.getElementById('status');
      if (navigator.onLine) {
        statusEl.textContent = '🟢 Online - Conectado à rede';
        statusEl.style.color = '#4caf50';
      } else {
        statusEl.textContent = '🔴 Offline - Rodando do cache local';
        statusEl.style.color = '#ff5252';
      }
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
  </script>
</body>
</html>
