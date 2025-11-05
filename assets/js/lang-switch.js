// assets/js/lang-switch.js
// Mały, odporny skrypt do przekierowania na odpowiadającą wersję językową
// - Wymaga aby <select id="lang-select"> zawierał opcje z data-url (wygenerowane przez include).
// - Nie powoduje dynamicznej zamiany treści, tylko redirect do wygenerowanej strony lokalizowanej.
document.addEventListener('DOMContentLoaded', function () {
  try {
    const sel = document.getElementById('lang-select');
    if (!sel) return;

    const path = window.location.pathname || '/';
    // Rozpoznaj prefiks /en jako angielski
    var isEn = path === '/en' || path === '/en/' || path.indexOf('/en/') === 0;
    sel.value = isEn ? 'en' : 'pl';

    sel.addEventListener('change', function (e) {
      var opt = e.target.selectedOptions && e.target.selectedOptions[0];
      if (!opt) return;
      let url = opt.getAttribute('data-url');
      if (!url) return;
      try {
        // Normalizuj względny URL
        url = url.replace(/\/{2,}/g, '/');
        if (url[0] !== '/') url = '/' + url;
        window.location.href = url;
      } catch (err) {
        console.error('Lang switch redirect failed', err);
      }
    }, false);
  } catch (ex) {
    console.warn('lang-switch init failed', ex);
  }
});