document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }
});

/* PWA — offline support + "Add to Home Screen" */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').catch(function () {});
  });
}

/* Ambient bubble background */
document.addEventListener('DOMContentLoaded', function () {
  var field = document.createElement('div');
  field.className = 'bubble-field';
  field.setAttribute('aria-hidden', 'true');

  var count = 14;
  for (var i = 0; i < count; i++) {
    var b = document.createElement('div');
    b.className = 'ambient-bubble';
    var size = 16 + Math.random() * 70;
    b.style.width = size + 'px';
    b.style.height = size + 'px';
    b.style.left = Math.random() * 100 + '%';
    var duration = 14 + Math.random() * 18;
    b.style.animationDuration = duration + 's';
    b.style.animationDelay = (-Math.random() * duration) + 's';
    b.style.setProperty('--drift', (Math.random() * 60 - 30) + 'px');
    field.appendChild(b);
  }
  document.body.insertBefore(field, document.body.firstChild);
});

/* Google AdMob Integration */
document.addEventListener('deviceready', function () {
  var admobid = {
    banner: 'ca-app-pub-4099613962859022/3260213371',
    interstitial: 'ca-app-pub-4099613962859022/6876024752'
  };

  if (window.admob) {
    // Banner Ad එක පල්ලෙහායින් පෙන්වීමට
    admob.banner.config({
      id: admobid.banner,
      isTesting: false,
      autoShow: true
    });
    admob.banner.prepare();

    // Interstitial (Full Screen) Ad එක Load කරගැනීමට
    admob.interstitial.config({
      id: admobid.interstitial,
      isTesting: false,
      autoShow: true
    });
    admob.interstitial.prepare();
  }
}, false);