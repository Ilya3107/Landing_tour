// Скрытие шапки при скролле
var elementScroll = document.querySelectorAll("header");
console.log(`Элементов для скрытия: ${elementScroll.length}`);
if (elementScroll.length > 0) {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  };
}
// Слайдеры
const swiper = new Swiper(".swiper", {
  effect: "fade",
  // cubeEffect: {
  //   slideShadows: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

// Плавный переход к блокам
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
console.log(`Колличество ссылок: ${menuLinks.length}`);
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top + pageYOffset;
      // Можно вычесть выстоу шапки , что бы ее размер учитывался - document.querySelector(".header").offsetHeight
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}
