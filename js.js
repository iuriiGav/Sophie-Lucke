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


// $('.click-listener-navbar > li').on('click', function(e){
//     // e.preventDefault();
//     $('.click-listener-navbar > li').removeClass('navlink-active');
//     $(this).addClass('navlink-active')
// })


})
