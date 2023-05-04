window.addEventListener("DOMContentLoaded", () => {
  smoothScroll();
});

const goTo = (url) => {
  window.open(url);
};

const smoothScroll = () => {
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
};
