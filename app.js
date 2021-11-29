const cursor = document.querySelector('.cursor');

   document.addEventListener('mousemove', e => {
       cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
   });

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

/*
$(window).scroll(function(){
    if ($(window).scrollTop() > 900){
        $('#').css('right','800px');
    }

*/

const scrollContainer = document.querySelector(".subpage");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});
