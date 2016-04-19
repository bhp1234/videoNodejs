$(document).ready( function(){

$('.stt1').addClass('stt2');
$('.nav1 > li').addClass('nav2');
$('.nav1 li:not(.nav2)').addClass('stt2');
$('tr:odd').addClass('alt'); 
$('.none').find('tr:eq(0)').addClass('stt2');
$("td").click(function(){alert($(this).html())});

$('#switcher-green').bind('click',function(){
$('.text').addClass('green').removeClass('red');
});

$('#switcher-default').bind('click',function(){
$('.text').addClass('default').removeClass('green').removeClass('red');
});

$('#switcher-red').bind('click',function(){
$('.text').addClass('red').removeClass('green');
});


 $('#hide-show').click(function(){
 $('#switcher').animate({opacity:'toggle',height:'toggle'},1000);
 });
 
<!-- $('#hide-show').click(function(){ $('#switcher').toggleClass('hidden')}); -->
 

 
} );


