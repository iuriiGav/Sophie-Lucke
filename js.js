$(document).ready(function(){ 
    $('.hero__sidebar__listen-now--btn').on('click', function(e) {
     
if($('.hero__audio-player--player').css('display') == 'none') {
    $(".hero__audio-player--player").fadeIn('slow')

}
        e.preventDefault();
        $('.hero__audio-player--player').removeClass('hidden');
        $('.hero__audio-player--player')[0].play();
        $('a').attr('target','_blank');


    })
$('audio').on({
    pause:function()
{
    setTimeout(function(){
        $('.hero__audio-player--player').fadeOut('slow');
        $('a').removeAttr('target');

    }, 500)
}})


$('.component__top-navbar-except-home--left').on('click', function(e) {
    window.location.href='/index.html';
})




})
