// Menu button for narrow screens (and large text or zoom; see the nav breakpoints in global.css).
// aria-expanded on the button is the only state: the CSS shows the links when it is "true",
// and screen readers announce the menu as expanded or collapsed from the same attribute.
(function () {
  var toggle = document.querySelector('.nav__toggle');
  if (!toggle) return;
  var menu = document.getElementById(toggle.getAttribute('aria-controls'));

  function isOpen() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', function () {
    setOpen(!isOpen());
  });

  document.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      setOpen(false);
    });
  });

  // Escape closes the menu; focus goes back to the button only if it was inside the menu,
  // so keyboard users aren't left on a link that just disappeared.
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape' || !isOpen()) return;
    var focusWasInMenu = menu && menu.contains(document.activeElement);
    setOpen(false);
    if (focusWasInMenu) toggle.focus();
  });
})();
