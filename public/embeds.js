// Click-to-load for the third-party embeds (Google Maps, YouTube).
//
// Each embed ships its iframe with `data-src`, never `src`, so nothing is
// requested from Google/YouTube — and no cookies can be set — until the visitor
// asks for it. That is what lets the site go without a cookie-consent banner.
// The choice is recorded per provider in localStorage so a returning visitor
// isn't asked again: a record of a choice the visitor explicitly made, which is
// why storing it doesn't itself need consent under PECR reg 6. It expires after
// CONSENT_TTL_DAYS, and the privacy page has a button that clears it.
//
// Markup (see Contact.astro / Videos.astro):
//   [data-embed="<provider>"]        wrapper; <provider> names the storage key
//     iframe[data-src]               the embed (optional data-src-click for the
//                                    URL to use when loaded by a click)
//     [data-embed-load]              the button that loads it
//     [data-embed-placeholder]       removed once the embed loads
(function () {
  var CONSENT_TTL_DAYS = 180;
  var CONSENT_TTL_MS = CONSENT_TTL_DAYS * 24 * 60 * 60 * 1000;
  var KEY_PREFIX = 'kankouji:consent:';

  function hasConsent(key) {
    try {
      var raw = localStorage.getItem(key);
      if (!raw) return false;
      var at = JSON.parse(raw).at;
      return typeof at === 'number' && Date.now() - at < CONSENT_TTL_MS;
    } catch (e) {
      // Private mode / storage blocked: ask each time rather than load unasked.
      return false;
    }
  }

  document.querySelectorAll('[data-embed]').forEach(function (box) {
    var key = KEY_PREFIX + box.dataset.embed;
    var frame = box.querySelector('iframe[data-src]');
    var button = box.querySelector('[data-embed-load]');
    if (!frame) return;

    function activate(src) {
      frame.src = src;
      frame.hidden = false;
      box.querySelectorAll('[data-embed-placeholder]').forEach(function (el) {
        el.remove();
      });
    }

    if (hasConsent(key)) {
      activate(frame.dataset.src);
      return;
    }

    if (button) {
      button.addEventListener('click', function () {
        try {
          localStorage.setItem(key, JSON.stringify({ v: 1, at: Date.now() }));
        } catch (e) {
          // Choice can't be remembered; the embed still loads this time.
        }
        activate(frame.dataset.srcClick || frame.dataset.src);
      });
    }
  });

  // Privacy page: show whether a choice is saved, and let the visitor clear it.
  var clearButton = document.querySelector('[data-embed-consent-clear]');
  var status = document.querySelector('[data-embed-consent-status]');
  if (!clearButton || !status) return;

  function savedKeys() {
    var keys = [];
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf(KEY_PREFIX) === 0 && hasConsent(k)) keys.push(k);
      }
    } catch (e) {
      // Storage blocked: nothing can have been saved.
    }
    return keys;
  }

  status.textContent = savedKeys().length
    ? clearButton.dataset.statusSaved
    : clearButton.dataset.statusNone;

  clearButton.addEventListener('click', function () {
    try {
      for (var i = localStorage.length - 1; i >= 0; i--) {
        var k = localStorage.key(i);
        if (k && k.indexOf(KEY_PREFIX) === 0) localStorage.removeItem(k);
      }
    } catch (e) {
      // Storage blocked: nothing to clear.
    }
    status.textContent = clearButton.dataset.statusCleared;
  });
})();
