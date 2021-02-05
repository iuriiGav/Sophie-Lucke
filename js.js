$(document).ready(function () {
  $(".hero__sidebar__listen-now--btn").on("click", function (e) {
    if ($(".hero__audio-player--player").css("display") == "none") {
      $(".hero__audio-player--player").fadeIn("slow");
    }
    e.preventDefault();
    $(".hero__audio-player--player").removeClass("hidden");
    $(".hero__audio-player--player")[0].play();
    $("a").attr("target", "_blank");
  });
  $("audio").on({
    pause: function () {
      setTimeout(function () {
        $(".hero__audio-player--player").fadeOut("slow");
        $("a").removeAttr("target");
      }, 500);
    },
  });

  $(".component__top-navbar-except-home--left").on("click", function (e) {
    window.location.href = "https://iuriigav.github.io/Sophie-Lucke/";
  });

  $(".bio__content__lang-btns-container--btn-de").on("click", function (e) {
    e.preventDefault();
    if (
      $(this).hasClass("bio__content__lang-btns-container--btn--not-active")
    ) {
        $(this).removeClass("bio__content__lang-btns-container--btn--not-active")
      $(".bio__content--GERMAN").hide().removeClass("hidden").fadeIn('slow');

      $(".bio__content--ENGLISH").addClass("hidden");

      $(".bio__content__lang-btns-container--btn-en").addClass("bio__content__lang-btns-container--btn--not-active");
    }
  });

  $(".bio__content__lang-btns-container--btn-en").on("click", function (e) {
    e.preventDefault();
    if (
      $(this).hasClass("bio__content__lang-btns-container--btn--not-active")
    ) {
        $(this).removeClass("bio__content__lang-btns-container--btn--not-active")
      $(".bio__content--ENGLISH").hide().removeClass("hidden").fadeIn('slow');
      $(".bio__content--GERMAN").addClass("hidden");
      $(".bio__content__lang-btns-container--btn-de").addClass("bio__content__lang-btns-container--btn--not-active");
    }
  });
});
