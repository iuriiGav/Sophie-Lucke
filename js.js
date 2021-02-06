$(document).ready(function () {

 

  $(".hero__sidebar__listen-now--btn").on("click", function (e) {
    if ($(".hero__audio-player--player").css("display") == "none") {
      $(".hero__audio-player--player").fadeIn(300);
      $(".hero__audio-player__close-container--btn").css(
        "visibility",
        "visible"
      );
      $(".hero__audio-player__close-container--btn").css("opacity", ".5");
    }
    e.preventDefault();
    $(".hero__audio-player--player").removeClass("hidden");
    $(".hero__audio-player--player")[0].play();
    $(".hero__audio-player__close-container--btn").css("visibility", "visible");
    $(".hero__audio-player__close-container--btn").css("opacity", ".5");

    $("a").attr("target", "_blank");
  });
  // $("audio").on({
  //   pause: function () {
  //     setTimeout(function () {
  //       $(".hero__audio-player--player").fadeOut("slow");
  //       $("a").removeAttr("target");
  //     }, 500);
  //   },
  // });

  $(".hero__audio-player__close-container--btn").click(function (e) {
    e.preventDefault();
    setTimeout(function () {
      $(".hero__audio-player--player")[0].pause();
      $(".hero__audio-player--player").fadeOut(300);
      $("a").removeAttr("target");
      $(".hero__audio-player__close-container--btn").css(
        "visibility",
        "hidden"
      );
      $(".hero__audio-player__close-container--btn").css("opacity", "0");
    }, 500);
  });

  $(".component__top-navbar-except-home--left").on("click", function (e) {
    window.location.href = "https://iuriigav.github.io/Sophie-Lucke/";
  });

  $(".bio__content__lang-btns-container--btn-de").on("click", function (e) {
    e.preventDefault();
    if (
      $(this).hasClass("bio__content__lang-btns-container--btn--not-active")
    ) {
      $(this).removeClass("bio__content__lang-btns-container--btn--not-active");
      $(this).addClass("bio__content__lang-btns-container--btn--active");
      $(".bio__content__lang-btns-container--btn-en").removeClass(
        "bio__content__lang-btns-container--btn--active"
      );

      $(".bio__content--GERMAN").hide().removeClass("hidden").fadeIn("slow");

      $(".bio__content--ENGLISH").addClass("hidden");

      $(".bio__content__lang-btns-container--btn-en").addClass(
        "bio__content__lang-btns-container--btn--not-active"
      );
    }
  });

  $(".bio__content__lang-btns-container--btn-en").on("click", function (e) {
    e.preventDefault();
    if (
      $(this).hasClass("bio__content__lang-btns-container--btn--not-active")
    ) {
      $(this).removeClass("bio__content__lang-btns-container--btn--not-active");
      $(this).addClass("bio__content__lang-btns-container--btn--active");
      $(".bio__content__lang-btns-container--btn-de").removeClass(
        "bio__content__lang-btns-container--btn--active"
      );
      $(".bio__content--ENGLISH").hide().removeClass("hidden").fadeIn("slow");
      $(".bio__content--GERMAN").addClass("hidden");
      $(".bio__content__lang-btns-container--btn-de").addClass(
        "bio__content__lang-btns-container--btn--not-active"
      );
    }
  });

  $(".mobile-nav__button").on("click", function () {
    if (!$(this).hasClass("isOpen")) {
      $("#mobile-nav__icon-bar1").css(
        "transform",
        "translate3d(0,8px,0) rotate(45deg)"
      );
      $("#mobile-nav__icon-bar2").css("opacity", "0");
      $("#mobile-nav__icon-bar3").css(
        "transform",
        "translate3d(0,-8px,0) rotate(-45deg)"
      );
      $(this).addClass("isOpen");
      //   $('.mobile-nav__nav-content').css('display', 'block');
      $(".mobile-nav__nav-content").css("opacity", "1");
      $(".mobile-nav__nav-content").css("visibility", "visible");
      $(".mobile-nav__nav-content").css("transform", "none");
    } else {
      $("#mobile-nav__icon-bar1").css(
        "transform",
        "translate3d(0,0px,0) rotate(0deg)"
      );
      $("#mobile-nav__icon-bar2").css("opacity", "1");
      $("#mobile-nav__icon-bar3").css(
        "transform",
        "translate3d(0,0px,0) rotate(0deg)"
      );
      $(".mobile-nav__nav-content").css("opacity", "0");
      $(".mobile-nav__nav-content").css("visibility", "hidden");
      $(".mobile-nav__nav-content").css("transform", "translateX(100%) ");
      $(this).removeClass("isOpen");
    }
  });

  ///////////////////////modal image

  $(".full-screen-image--img").on("click", function () {
    const imgID = $(this).attr("id");
console.log($(this))
    $(`#${imgID}-myModal`).css("display", "block");
    $(`#${imgID}-modal`).attr("src", `${$(`#${imgID}`).attr("src")}`);

    const span = document.getElementsByClassName("close")[0];
  });

  $(".full-screen-image-close").on("click", function () {
    const imgID = $(this).parent().attr("id");
    $(`#${imgID}`).css("display", "none");
  });





 

  
$('.secondary-wrapper--bg1').on('click','.swiper-container--close', function() {
 
    $('#swiper-gallery-full-screen').fadeOut(300, function() { $(this).remove(); })
    $('.galery').fadeIn();
 
})




const swiperGallery = `<div id="swiper-gallery-full-screen" class="swiper-modal">

<!-- Slider main container -->
<div class="swiper-container">
  <p class="swiper-container--close">&times;</p>
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide"><img src="img/galery/IMG_3546-minified.jpg" alt=""></div>
    <div class="swiper-slide"><img src="img/galery/42A0934-minified.jpg" alt=""></div>
    <div class="swiper-slide"><img src="img/galery/14700745_10208929141558352_1767394398515383186_o-minified.jpg" alt=""></div>
    <div class="swiper-slide"><img src="img/galery/14344227_1278549945502120_5390873153939167157_n-minified.jpg" alt=""></div>
    <div class="swiper-slide"><img src="img/galery/14344171_1278549982168783_6020645592251789313_n-minified.jpg" alt=""></div>
    <div class="swiper-slide"><img src="img/IMG_8561-minified.jpg" alt=""></div>
    <div class="swiper-slide"><img src="img/IMG_8562-minified.jpg" alt=""></div>
    <div class="swiper-slide"><img src="img/sophie-cover-pictures/sophie-tall-crpoped.jpg" alt=""></div>
    ...
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
</div>`


$('.galery__container').on('click', function() {
  $('.galery').fadeOut();
  $(swiperGallery).hide().appendTo('.alternative-gallery-placeholder').fadeIn();
  
  
  
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  
  
  reinitSwiper();


})

});

