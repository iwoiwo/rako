let bodyElm = document.querySelector("body");

//cursor blinking style

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
       cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;");
   });


//  scroll arrow

const arrowDown = document.getElementById('triangle-down');
const frame = document.querySelector('.yellow-outline');

let didScroll = false;
window.onscroll = () => didScroll = true;
setInterval(() => {
    if( ( didScroll ) ||  ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) ) {
        didScroll = false;
        arrowDown.style.opacity='0'
          }else{
      arrowDown.style.opacity='1'
    }
}, 150);



// scroll to id

if( $('a[href^="#front-page"]') || $('a[href^="#second-page"]') || $('a[href^="#third-page"]') ){

      $('a[href^="#"]').click(function(event) {
        event.stopPropagation();
        var target = $(this.getAttribute('href'));
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 1000, 'swing');
});
}

// horizontal scroll

if( bodyElm.classList.contains('edukacja')){

const scrollContainer = document.querySelector(".subpage");
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

};

// burger opening menu

$("#burger").click(function (e) {

e.stopPropagation();
$('.main-menu').removeClass('animated-menu-back');
$('.main-menu').addClass('animated-menu');
$("#burger").css('display', 'none')

$('.main').click(function (e) {
  e.stopPropagation();
  $('.main-menu').removeClass('animated-menu');
  $('.main-menu').addClass('animated-menu-back');
  $("#burger").css('display', 'block');
});

$(window).scroll(function(e) {
  $('.main-menu').removeClass('animated-menu');
  $('.main-menu').addClass('animated-menu-back');
  $("#burger").css('display', 'block');
});

});

//
