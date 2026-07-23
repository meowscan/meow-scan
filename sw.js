<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2010/spec/xhtml/blog' xmlns:data='http://www.google.com/2010/spec/xhtml/data' xmlns:expr='http://www.google.com/2010/spec/xhtml/expr'>
<head>
  <meta charset='utf-8'/>
  <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'/>
  <title><data:blog.pageTitle/></title>
  
  <b:skin><![CDATA[
    /* CSS BÁSICO DO BLOGGER */
    body { margin: 0; padding: 0; background: #0a0a0c; font-family: 'Poppins', sans-serif; }
    .section, .widget { margin: 0; padding: 0; }
  ]]></b:skin>

  <!-- Google Fonts & Font Awesome -->
  <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&amp;display=swap' rel='stylesheet'/>
  <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' rel='stylesheet'/>

  <style>
    /* ==========================================================================
       VARIÁVEIS DE TEMA E CORES
       ========================================================================== */
    :root {
      --bg-main: #0c0d10;
      --bg-card: #14161d;
      --bg-header: rgba(12, 13, 16, 0.85);
      --text-main: #f3f4f6;
      --text-muted: #9ca3af;
      --border-color: rgba(255, 255, 255, 0.08);
      
      /* Paleta Padrão (Rosa / Meow) */
      --primary: #ff4785;
      --primary-hover: #ff2a71;
      --primary-glow: rgba(255, 71, 133, 0.3);
    }

    /* Temas de Cores */
    [data-palette="blue"] { --primary: #3b82f6; --primary-hover: #2563eb; --primary-glow: rgba(59, 130, 246, 0.3); }
    [data-palette="red"] { --primary: #ef4444; --primary-hover: #dc2626; --primary-glow: rgba(239, 68, 68, 0.3); }
    [data-palette="purple"] { --primary: #8b5cf6; --primary-hover: #7c3aed; --primary-glow: rgba(139, 92, 246, 0.3); }

    /* Light Mode */
    [data-theme="light"] {
      --bg-main: #f8fafc;
      --bg-card: #ffffff;
      --bg-header: rgba(248, 250, 252, 0.85);
      --text-main: #0f172a;
      --text-muted: #64748b;
      --border-color: rgba(0, 0, 0, 0.08);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background-color: var(--bg-main); color: var(--text-main); font-family: 'Poppins', sans-serif; transition: background 0.3s, color 0.3s; overflow-x: hidden; }

    /* ==========================================================================
       CABEÇALHO / HEADER
       ========================================================================== */
    #main-header {
      position: fixed; top: 0; left: 0; right: 0; height: 70px;
      background: var(--bg-header); backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border-color);
      z-index: 1000; display: flex; align-items: center; justify-content: space-between;
      padding: 0 5%; transition: transform 0.3s ease;
    }
    #main-header.nav-hidden { transform: translateY(-100%); }

    .header-logo { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 1.3rem; color: var(--text-main); text-decoration: none; }
    .header-logo span { color: var(--primary); }

    .header-search { position: relative; width: 300px; }
    .header-search input {
      width: 100%; padding: 10px 15px 10px 40px; border-radius: 20px;
      background: var(--bg-card); border: 1px solid var(--border-color);
      color: var(--text-main); font-size: 0.9rem; outline: none; transition: 0.3s;
    }
    .header-search input:focus { border-color: var(--primary); box-shadow: 0 0 10px var(--primary-glow); }
    .header-search i { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: var(--text-muted); }

    .header-actions { display: flex; align-items: center; gap: 15px; }
    .theme-btn { background: none; border: none; color: var(--text-main); font-size: 1.2rem; cursor: pointer; transition: 0.3s; }
    .theme-btn:hover { color: var(--primary); }

    /* ==========================================================================
       BANNER DE DESTAQUE / HERO
       ========================================================================== */
    #hero-banner {
      position: relative; width: 100%; height: 60vh; min-height: 400px;
      margin-top: 70px; overflow: hidden; display: flex; align-items: flex-end;
    }
    .banner-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
    
    /* Gradiente otimizado para legibilidade do texto */
    .banner-gradient {
      position: absolute; inset: 0; z-index: 2;
      background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 75%, var(--bg-main) 100%);
    }

    .banner-content {
      position: relative; z-index: 3; padding: 30px 5%; width: 100%; max-width: 800px;
    }
    .banner-tag { background: var(--primary); color: #fff; font-size: 0.8rem; font-weight: 600; padding: 4px 12px; border-radius: 12px; text-transform: uppercase; }
    .banner-title { font-size: 2.2rem; font-weight: 800; margin: 10px 0; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.8); }
    .banner-desc { font-size: 0.95rem; color: #e2e8f0; margin-bottom: 20px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

    /* ==========================================================================
       CONTEÚDO PRINCIPAL E GRIDS
       ========================================================================== */
    .main-container { padding: 30px 5%; max-width: 1400px; margin: 0 auto; }
    .section-title { font-size: 1.4rem; font-weight: 700; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
    .section-title i { color: var(--primary); }

    .works-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 20px; margin-bottom: 40px; }
    
    .card-work {
      background: var(--bg-card); border-radius: 12px; overflow: hidden;
      border: 1px solid var(--border-color); transition: transform 0.3s, box-shadow 0.3s;
      position: relative; display: flex; flex-direction: column; text-decoration: none; color: inherit;
    }
    .card-work:hover { transform: translateY(-5px); box-shadow: 0 8px 20px var(--primary-glow); border-color: var(--primary); }
    
    .card-thumb { position: relative; width: 100%; aspect-ratio: 3/4; overflow: hidden; background: #1a1c23; }
    .card-thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; }
    .card-work:hover .card-thumb img { transform: scale(1.05); }

    .card-info { padding: 12px; display: flex; flex-direction: column; flex-grow: 1; }
    .card-title { font-size: 0.95rem; font-weight: 600; margin-bottom: 6px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .card-chapter { font-size: 0.8rem; color: var(--primary); font-weight: 500; }

    /* TOP 10 ROLAGEM HORIZONTAL */
    .top10-container { display: flex; gap: 15px; overflow-x: auto; padding-bottom: 15px; scrollbar-width: none; }
    .top10-container::-webkit-scrollbar { display: none; }
    .top10-card { flex: 0 0 220px; position: relative; }

    /* ==========================================================================
       NAVEGAÇÃO INFERIOR MOBILE
       ========================================================================== */
    #mobile-bottom-nav {
      position: fixed; bottom: 0; left: 0; right: 0; height: 60px;
      background: var(--bg-header); backdrop-filter: blur(12px);
      border-top: 1px solid var(--border-color); z-index: 1000;
      display: none; justify-content: space-around; align-items: center;
      transition: transform 0.3s ease;
    }
    #mobile-bottom-nav.nav-hidden { transform: translateY(100%); }
    
    .nav-item { color: var(--text-muted); text-decoration: none; font-size: 1.2rem; display: flex; flex-direction: column; align-items: center; gap: 2px; }
    .nav-item span { font-size: 0.65rem; }
    .nav-item.active { color: var(--primary); }

    @media (max-width: 768px) {
      .header-search { display: none; }
      #mobile-bottom-nav { display: flex; }
      .works-grid { grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 12px; }
      #hero-banner { height: 45vh; }
      .banner-title { font-size: 1.5rem; }
    }
  </style>
</head>
<body data-palette='pink' data-theme='dark'>

  <!-- CABEÇALHO -->
  <header id='main-header'>
    <a class='header-logo' href='/'>
      <i class='fa-solid fa-cat'/> Meow <span>Scan</span>
    </a>

    <div class='header-search'>
      <i class='fa-solid fa-magnifying-glass'/>
      <input id='searchInput' placeholder='Buscar obra ou capítulo...' type='text'/>
    </div>

    <div class='header-actions'>
      <button class='theme-btn' id='toggleThemeBtn' title='Alternar Tema'>
        <i class='fa-solid fa-moon'/>
      </button>
    </div>
  </header>

  <!-- APP PRINCIPAL DA HOME -->
  <div id='meow-elite-app'>
    
    <!-- BANNER HERO -->
    <div id='hero-banner'>
      <img alt='Banner Destaque' class='banner-img' id='heroImg' src='https://via.placeholder.com/1200x600'/>
      <div class='banner-gradient'/>
      <div class='banner-content'>
        <span class='banner-tag' id='heroTag'>Destaque</span>
        <h1 class='banner-title' id='heroTitle'>Carregando Obra...</h1>
        <p class='banner-desc' id='heroDesc'>Por favor, aguarde enquanto os dados são atualizados.</p>
      </div>
    </div>

    <div class='main-container'>
      
      <!-- SEÇÃO: TOP 10 MAIS LIDOS -->
      <h2 class='section-title'><i class='fa-solid fa-fire'/> Top 10 Mais Lidos</h2>
      <div class='top10-container' id='top10List'>
        <!-- Preenchido via JS -->
      </div>

      <br/><br/>

      <!-- SEÇÃO: LANÇAMENTOS RECENTES -->
      <h2 class='section-title'><i class='fa-solid fa-clock'/> Lançamentos Recentes</h2>
      <div class='works-grid' id='recentGrid'>
        <!-- Preenchido via JS -->
      </div>

      <!-- SEÇÃO: TODAS AS OBRAS -->
      <h2 class='section-title'><i class='fa-solid fa-book-open'/> Todas as Obras</h2>
      <div class='works-grid' id='allGrid'>
        <!-- Preenchido via JS -->
      </div>

    </div>
  </div>

  <!-- NAVEGAÇÃO MOBILE -->
  <nav id='mobile-bottom-nav'>
    <a class='nav-item active' href='/'><i class='fa-solid fa-house'/><span>Início</span></a>
    <a class='nav-item' href='/p/favoritos.html'><i class='fa-solid fa-bookmark'/><span>Favoritos</span></a>
    <a class='nav-item' href='/p/todas-as-obras.html'><i class='fa-solid fa-list'/><span>Obras</span></a>
  </nav>

  <!-- ESTRUTURA INTERNA DO BLOGGER (OCULTA) -->
  <div style='display:none;'>
    <b:section id='main' showaddelement='yes'/>
  </div>

  <!-- SCRIPTS E LÓGICA DO FIREBASE / ROTEAMENTO -->
  <script>
    // <![CDATA[
    document.addEventListener("DOMContentLoaded", function() {
      
      // 1. Oculta cabeçalho/menu em rotas específicas
      const currentPath = window.location.pathname;
      const hiddenRoutes = ['/p/painel-de-obras.html', '/p/peach-pie.html', '/p/leitor.html'];
      
      if (hiddenRoutes.some(route => currentPath.includes(route))) {
        const header = document.getElementById('main-header');
        const bottomNav = document.getElementById('mobile-bottom-nav');
        if (header) header.style.display = 'none';
        if (bottomNav) bottomNav.style.display = 'none';
      }

      // 2. Controlar Smart Scroll (Esconde navegação ao rolar para baixo)
      let lastScrollY = window.scrollY;
      window.addEventListener('scroll', () => {
        const header = document.getElementById('main-header');
        const bottomNav = document.getElementById('mobile-bottom-nav');
        
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          if (header) header.classList.add('nav-hidden');
          if (bottomNav) bottomNav.classList.add('nav-hidden');
        } else {
          if (header) header.classList.remove('nav-hidden');
          if (bottomNav) bottomNav.classList.remove('nav-hidden');
        }
        lastScrollY = window.scrollY;
      });

      // 3. Alternar Tema (Claro / Escuro)
      const themeBtn = document.getElementById('toggleThemeBtn');
      if (themeBtn) {
        themeBtn.addEventListener('click', () => {
          const currentTheme = document.body.getAttribute('data-theme');
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
          document.body.setAttribute('data-theme', newTheme);
          themeBtn.querySelector('i').className = newTheme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
        });
      }

      // 4. Exemplo de Renderização Dinâmica e Suporte SEO a Imagens
      const mockObras = [
        { id: 1, nome: "Obra Exemplo 1", capa: "https://via.placeholder.com/300x400", cap: "Cap. 45", views: 1200 },
        { id: 2, nome: "Obra Exemplo 2", capa: "https://via.placeholder.com/300x400", cap: "Cap. 12", views: 950 }
      ];

      function renderGrid(containerId, list) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = list.map(item => `
          <a href="/p/obra.html?id=${item.id}" class="card-work">
            <div class="card-thumb">
              <img src="${item.capa}" alt="${item.nome}" loading="lazy"/>
            </div>
            <div class="card-info">
              <div class="card-title">${item.nome}</div>
              <div class="card-chapter">${item.cap}</div>
            </div>
          </a>
        `).join('');
      }

      renderGrid('recentGrid', mockObras);
      renderGrid('allGrid', mockObras);
    });
    // ]]>
  </script>
</body>
</html>
