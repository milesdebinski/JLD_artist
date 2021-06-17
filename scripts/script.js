const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");
const overlay = document.getElementById("overlay");
const mobile = document.getElementById("mobile");
const exit = document.getElementById("close");

hamburger.addEventListener("click", () => {
  overlay.classList.toggle("active");
  mobile.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  overlay.classList.toggle("active");
  mobile.classList.toggle("active");
});

exit.addEventListener("click", () => {
  overlay.classList.toggle("active");
  mobile.classList.toggle("active");
});

// viewport items
const mainItems = document.querySelectorAll("#appear_itm");
const mainItemsMobile = document.querySelectorAll("#appear_itm_mobile");

const mainIsInViewport = (el) => {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= -200 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + 60
  );
};
const mainRun = () => {
  mainItems.forEach((item) => {
    if (mainIsInViewport(item)) {
      setTimeout(() => {
        item.classList.add("main_show");
      }, 250);
    }
  });
};

const main_moileIsInViewport = (el) => {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= -200 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + 340
  );
};
const mainRun_mobile = () => {
  mainItemsMobile.forEach((item) => {
    if (main_moileIsInViewport(item)) {
      setTimeout(() => {
        item.classList.add("main_show");
      }, 250);
    }
  });
};

//Trigger Events

window.addEventListener("load", mainRun);
window.addEventListener("resize", mainRun);
window.addEventListener("scroll", mainRun);
window.addEventListener("load", mainRun_mobile);
window.addEventListener("resize", mainRun_mobile);
window.addEventListener("scroll", mainRun_mobile);

// Onscroll Navbar
const navbar = document.querySelectorAll("#navbar");
var lastScrollTop = 0;
window.addEventListener(
  "scroll",
  function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      // downscroll code
      navbar.forEach((item) => {
        item.classList.add("fixed");
      });
    } else {
      // upscroll code
      navbar.forEach((item) => {
        item.classList.remove("fixed");
      });
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);

// show navbar when cursor hight
window.addEventListener("mousemove", (el) => {
  if (el.screenY < 220) {
    navbar.forEach((item) => {
      item.classList.remove("fixed");
    });
  }
});
// logo link, call number on click, open mailer
const logo_home = document.getElementById("logo_home");
const phone_number = document.getElementById("phone_number");
const email_address = document.getElementById("email_address");

logo_home.addEventListener("click", () => {
  window.open("../index.html", "_self");
});
phone_number.addEventListener("click", () => {
  window.open("tel:+447391610097");
});
email_address.addEventListener("click", () => {
  window.open("mailto:janlesz@gmx.net");
});
