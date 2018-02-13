import Typed from 'typed.js';

function loadDynamicBannerText() {
  const bannerText = document.getElementById('banner-typed-text');
  if (bannerText) {
    new Typed('#banner-typed-text', {
      strings: [
      "The new Freight Line ...",
      "Across The Channel between...",
      "Ramsgate and Ostend ..."],
      typeSpeed: 100,
      loop: true
    });
  }
}

loadDynamicBannerText();

export { loadDynamicBannerText };


