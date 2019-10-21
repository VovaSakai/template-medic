//Anchor
$(".nav").on('click', '[href*="#"]', function(e){
  var fixed_offset = 0;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

$(function () {
  $("#about-tabs").tabs();
});

$(document).ready(function(){
  $('#home-owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    items: 1,
    dots: false,
    navText: [
      "<svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='angle-left' class='svg-inline--fa fa-angle-left fa-w-8' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'><path fill='currentColor' d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'></path></svg>",
      "<svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='angle-left' class='svg-inline--fa fa-angle-left fa-w-8' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'><path fill='currentColor' d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'></path></svg>"
    ],
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true
  })
});

$(document).ready(function(){
  $('#services-owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    navText: [
      "<svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='angle-left' class='svg-inline--fa fa-angle-left fa-w-8' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'><path fill='currentColor' d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'></path></svg>",
      "<svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='angle-left' class='svg-inline--fa fa-angle-left fa-w-8' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'><path fill='currentColor' d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'></path></svg>"
    ],
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
  })
});



