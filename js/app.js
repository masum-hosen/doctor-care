const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const menu = document.querySelectorAll(".navbar-menu");
const burger = document.querySelectorAll(".navbar-burger");
const close = document.querySelectorAll(".navbar-close");
const backdrop = document.querySelectorAll(".navbar-backdrop");
const mobileMenuLink = document.querySelectorAll(
  "#mobile-menu-close a[href='#']"
);

document.addEventListener("DOMContentLoaded", () => {
  setDefaultActiveLink();
  window.addEventListener("scroll", handleScroll);

  if (burger.length && menu.length) {
    handleMobileMenuToogle(burger, menu);
  }

  if (close.length && backdrop.length && menu.length) {
    handleMobileMenuClose(close, backdrop, menu);
  }

  if (mobileMenuLink.length && navLinks.length && menu.length) {
    handleMobileMenuLinkClicks(mobileMenuLink, navLinks, menu);
  }
});

const setActiveLink = (sections, navLinks) => {
  let index = sections.length;
  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  navLinks.forEach(link => link.classList.remove("active"));
  if (navLinks[index]) {
    navLinks[index].classList.add("active");
  }
};

function setDefaultActiveLink() {
  const homeLink = document.querySelector('nav a[href="#home"]');
  if (homeLink) {
    homeLink.classList.add("active");
  }
}
const handleScroll = () => {
  setActiveLink(sections, navLinks);
};

const handleMobileMenuToogle = (burger, menu) => {
  burger.forEach(b => {
    b.addEventListener("click", () => {
      menu.forEach(m => m.classList.toggle("hidden"));
    });
  });
};

function handleMobileMenuClose(close, backdrop, menu) {
  close.forEach(c => {
    c.addEventListener("click", () => {
      menu.forEach(m => m.classList.add("hidden"));
    });
  });

  backdrop.forEach(b => {
    b.addEventListener("click", () => {
      menu.forEach(m => m.classList.add("hidden"));
    });
  });
}

function handleMobileMenuLinkClicks(mobileMenuLink, navLinks, menu) {
  mobileMenuLink.forEach(anchor => {
    anchor.addEventListener("click", () => {
      navLinks.forEach(link => link.classList.remove("active"));
      const targetLink = document.querySelector(
        `nav a[href="${this.getAttribute("href")}"]`
      );
      if (targetLink) {
        targetLink.classList.add("active");
      }
      menu.forEach(m => m.classList.add("hidden"));
    });
  });
}
