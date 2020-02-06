const nav = document.querySelector(".nav");
const headerMenu = document.querySelector(".header-menu");
const headerBurger = document.querySelector(".header-burger");
const body = document.querySelector("body");

headerBurger.addEventListener("click", onHeaderClick);

function onHeaderClick(event) {
  //event.preventDefault();

  headerMenu.classList.toggle("is-closed");
  // headerBurger.setAttribute("src", "/images/menu-close.png");
  headerBurger.classList.toggle("burger-close");
  // body.classList.toggle("menu-open");
}

// Закрытие меню по нажатию на якорь

$(".header-menu-item").click(function() {
  $(".header-menu").addClass("is-closed"),
    $(".header-burger").removeClass("burger-close");
});

$(document).ready(function() {
  $(".test").slick({

  });
});

//Плавность якорей

// $(document).ready(function() {
//     //ID блока с ссылками #prime_nav
//     $(".nav-menu").on("click", "a", function(event) {
//       //отменяем стандартную обработку нажатия по ссылке
//       //event.preventDefault();

//       //забираем идентификатор бока с атрибута href
//       var id = $(this).attr("href"),
//         //узнаем высоту от начала страницы до блока на который ссылается якорь
//         top = $(id).offset().top;

//       //анимируем переход на расстояние - top за 1200 мс
//       $("body, html").animate({ scrollTop: top }, 1200);
//     });
//   });
