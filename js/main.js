document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  if (!nav) return;

  const updateNav = () => {
    nav.classList.toggle("nav--scrolled", window.scrollY > 10);
  };

  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });
});
