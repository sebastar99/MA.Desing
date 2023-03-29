const navButton = document.querySelector('.nav-button');
const navMenu = document.querySelector('nav');
const header = document.querySelector('header');

navButton.addEventListener('click', () => {
  navMenu.classList.toggle('visible');
  header.classList.toggle('visible');
  if (navMenu.classList.contains('visible')){
  document.getElementById("icono").classList.add('fa-plus');
  }else{
    document.getElementById("icono").classList.remove('fa-plus');
  }

});




$('section.awSlider .carousel').carousel({
	pause: "hover",
  interval: 2000
});

var startImage = $('section.awSlider .item.active > img').attr('src');
$('section.awSlider').append('<img src="' + startImage + '">');

$('section.awSlider .carousel').on('slid.bs.carousel', function () {
 var bscn = $(this).find('.item.active > img').attr('src');
	$('section.awSlider > img').attr('src',bscn);
});
