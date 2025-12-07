export function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'main-footer';
    footer.style.backgroundColor = 'var(--color-white)';
    footer.style.padding = 'var(--spacing-lg) 0';
    footer.style.marginTop = 'var(--spacing-xl)';
    footer.style.borderTop = '1px solid var(--color-border)';

    footer.innerHTML = `
    <div class="container text-center">
      <h3 style="color: var(--color-primary); margin-bottom: var(--spacing-sm);">HisarFitCamp</h3>
      <p style="margin-bottom: var(--spacing-md); color: var(--color-text-light);">Doğada Yenilen, Enerjini Keşfet.</p>
      <div class="footer-links" style="margin-bottom: var(--spacing-md); display: flex; justify-content: center; gap: var(--spacing-md); flex-wrap: wrap;">
        <a href="/program/" style="text-decoration: none;">Program</a>
        <a href="/facilities/" style="text-decoration: none;">İmkanlar</a>
        <a href="/team/" style="text-decoration: none;">Eğitmenler</a>
        <a href="/contact/" style="text-decoration: none;">İletişim</a>
      </div>
      <p style="font-size: 0.9rem; color: var(--color-text-light);">&copy; ${new Date().getFullYear()} HisarFitCamp. Tüm hakları saklıdır.</p>
    </div>
  `;
    return footer;
}
