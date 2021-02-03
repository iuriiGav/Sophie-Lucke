$(document).ready(function(){ 
    $('.hero__sidebar__listen-now--btn').on('click', function(e) {
        console.log('ji')
if($('.hero__audio-player--player').css('display') == 'none') {
    $(".hero__audio-player--player").fadeIn('slow')

}
        e.preventDefault();
        $('.hero__audio-player--player').removeClass('hidden');
        $('.hero__audio-player--player')[0].play();


    })
$('audio').on({
    pause:function()
{
    setTimeout(function(){
        $('.hero__audio-player--player').fadeOut('slow');


    }, 500)
}})




})
