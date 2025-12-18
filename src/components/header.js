export function createHeader() {
  const header = document.createElement('header');
  header.className = 'main-header';
  header.style.backgroundColor = 'var(--color-white)';
  header.style.boxShadow = 'var(--shadow-sm)';
  header.style.position = 'sticky';
  header.style.top = '0';
  header.style.zIndex = '1000';

  const currentPath = window.location.pathname;
  const getLinkStyle = (path) => {
    const isActive = currentPath === path || (path !== '/' && currentPath.startsWith(path));
    return isActive
      ? 'font-weight: 600; text-decoration: none; color: var(--color-primary); border-bottom: 2px solid var(--color-primary); padding-bottom: 4px;'
      : 'font-weight: 600; text-decoration: none; color: var(--color-text);';
  };

  header.innerHTML = `
    <div class="container" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem;">
      <a href="/" class="logo" style="font-size: 1.5rem; font-weight: 700; color: var(--color-primary); text-decoration: none;">HisarFitCamp</a>
      
      <!-- Desktop Nav -->
      <nav class="desktop-nav">
        <ul style="display: flex; gap: 2rem; margin: 0; padding: 0; list-style: none;">
          <li><a href="/" style="${getLinkStyle('/')}">Ana Sayfa</a></li>
          <li><a href="/program/" style="${getLinkStyle('/program/')}">Program</a></li>
          <li><a href="/facilities/" style="${getLinkStyle('/facilities/')}">İmkanlar</a></li>
          <li><a href="/team/" style="${getLinkStyle('/team/')}">Eğitmenler</a></li>
          <li><a href="/contact/" style="${getLinkStyle('/contact/')}">İletişim</a></li>
        </ul>
      </nav>
      
      <div style="display: flex; align-items: center; gap: 1rem;">
          <a href="/form/" class="btn btn-primary header-cta" style="padding: 8px 24px; font-size: 0.9rem; text-decoration: none;">Başvuru Yap</a>
          
          <!-- Mobile Nav Toggle -->
          <button class="mobile-nav-toggle" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
      </div>

      <!-- Mobile Nav Overlay -->
      <div class="mobile-nav">
        <ul style="list-style: none; padding: 0;">
          <li><a href="/">Ana Sayfa</a></li>
          <li><a href="/program/">Program</a></li>
          <li><a href="/facilities/">İmkanlar</a></li>
          <li><a href="/team/">Eğitmenler</a></li>
          <li><a href="/contact/">İletişim</a></li>
          <li><a href="/form/" class="btn btn-primary" style="display: inline-block; margin-top: 1rem;">Başvuru Yap</a></li>
        </ul>
      </div>
    </div>
  `;

  // Add Toggle Logic
  const toggleBtn = header.querySelector('.mobile-nav-toggle');
  const mobileNav = header.querySelector('.mobile-nav');

  if (toggleBtn && mobileNav) {
    toggleBtn.addEventListener('click', () => {
      toggleBtn.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when a link is clicked
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggleBtn.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  return header;
}
