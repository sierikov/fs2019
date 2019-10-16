
//PRELOADER
$(window).on('load', function(){
  $('body').imagesLoaded(function() {
    $("#preloader").delay(300).addClass('loaded');
  }); 

  //PORTFOLIO JS
  var $container = $('.masonry');
  $container.isotope({
    itemSelector: '.grid-item, .lightbox-gallery .msnry',
    gutter:0,
    transitionDuration: "0.5s",
    columnWidth: '.grid-item'
  });
  $('.portfolio_filter ul li a').on("click", function(){
    $(".portfolio_filter ul li a").removeClass("select-cat");
    $(this).addClass("select-cat");        
    var selector = $(this).attr('data-filter');
    $(".masonry").isotope({
        filter: selector,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
  }
});
    return false;
});   

$(".filter-icon").on("click", function() {
        $('.portfolio_filter').addClass('show');        
});

$(".portfolio_filter").on("click", function (event) {
if (!$(event.target).is(".portfolio_filter ul li a")) {
        $('.portfolio_filter').removeClass('show');
        return false;
    }
});   

// Infinite Scroll
var curPage = 1;
var pagesNum = $("#pagination-selector").find("li a:last").text();   // Number of pages

$container.infinitescroll({
    itemSelector: '.grid-item',
    nextSelector: '.portfolio-pagination li a',
    navSelector: '#pagination-selector',
    extraScrollPx: 0,
    bufferPx: 0,
    maxPage: 6,
    loading: {
        finishedMsg: "No more works",
        msgText: '<div class="loader"><span></span></div>',
        speed: 'slow',
        selector: '.load-more',
    },
},
// trigger Masonry as a callback
function( newElements ) {

      var $newElems = $( newElements );
      $newElems.imagesLoaded(function(){  // Append masonry        
        $newElems.animate({ opacity: 1 });
        $container.isotope( 'appended', $newElems, true ); 
      });
      // Check last page
      curPage++;
      if(curPage == pagesNum) {
        $( '.load-more button' ).remove();
      }
      $('.load-more').find('button').css('visibility', 'visible');
    });

    $container.infinitescroll( 'unbind' );
    // jQuery
$container.on( 'append.infinitescroll', function( event, response, path, items ) {
  console.log( 'Loaded: ' + path );
});


    $( '.load-more button' ).on('click', function() {
      setTimeout(function()
      { 
       magnific(); 
       },1000);  
      $container.infinitescroll( 'retrieve' );
      $('.load-more').find('button').css('visibility', 'hidden');
      return false;
    });

$(window).bind("pageshow", function(event) {
    if (event.originalEvent.persisted) {
        window.location.reload(); 
    }
});

}); 

$(document).ready( function() {


  //TYPED JS
  if ($('.element').length) {
    $('.element').each(function () {
        $(this).typed({
            strings: [$(this).data('text1'), $(this).data('text2'), $(this).data('text3')],
            loop: $(this).data('loop') ? $(this).data('loop') : false ,
            backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000 ,                
            typeSpeed: 10,
        });
    });
}

//HERO SLIDER JS  
  var swiper = new Swiper('.swiper-container.classic', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      loop: true,
    },
  });

  //Vertical Slide
  var swiper = new Swiper('.swiper-container.upslide', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      loop: true,
    },
  });

  //Carousel Slide
  var swiper = new Swiper('.swiper-container.carousel', {
    centeredSlides: true,
    slidesPerView: 'auto',
    speed:800,
    loop: true, 
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },   
  });

  //Fade Slide
  var swiper = new Swiper('.swiper-container.fade-slide', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


//COUNTER JS  
if ($('.counter').length) {
  var a = 0;
  $(window).scroll(function() {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },
          {
            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }
          });
      });
      a = 1;
    }
  });
}

// OWL CAROUSEL JS
var owlcar = $('.owl-carousel');
if (owlcar.length) {
    owlcar.each(function () {
        var $owl = $(this);
        var itemsData = $owl.data('items');
        var autoplayData = $owl.data('autoplay');
        var autoPlayTimeoutData = $owl.data('autoplaytimeout');
        var dotsData = $owl.data('dots');
        var navData = $owl.data('nav');
        var marginData = $owl.data('margin');
        var stagePaddingData = $owl.data('stagepadding');
        var itemsDesktopData = $owl.data('items-desktop');
        var itemsTabletData = $owl.data('items-tablet');
        var itemsTabletSmallData = $owl.data('items-tablet-small');
        $owl.owlCarousel({
              items: itemsData
            , dots: dotsData
            , nav: navData
            , margin: marginData
            , loop: true
            , stagePadding: stagePaddingData
            , autoplay: autoplayData
            , autoplayTimeout: autoPlayTimeoutData
            , navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"]
            , responsive:{
                    0:{
                        items:itemsTabletSmallData,
                        stagePadding:0
                    },
                    600:{
                        items:itemsTabletData,
                        stagePadding:0
                    },
                    1000:{
                        items:itemsDesktopData
                    }
                }
        , });
    });
}

// ONE PAGE SCROLL JS

     if ($('.hero').length) {
      $(document).on("scroll", onScroll);
      $('nav ul li a, .slider-content .site-btn, .about .site-btn').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('a').each(function () {
              $(this).removeClass('active');
          });
              
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          target = $(target);
          $('html, body').stop().animate({
              'scrollTop': target.offset().top
              
          }, 500, 'swing', function () {
              window.location.hash = target.selector;
              $(document).on("scroll", onScroll);
          });
      });
  }

  function onScroll(event){
    if ($('#hero').length) {     
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('nav ul li a').removeClass("activelink");
              currLink.addClass("activelink");
          }
      });
     }              
  }

  $('.nav-icon, nav ul li a').on("click", function(){
    $('header').toggleClass('open');
  });


  //NAVBAR SHOW - HIDE
  $(window).scroll(function() {				
    var scroll = $(window).scrollTop();
    var homeheight = $(".hero").height() -86;			

    if (scroll > homeheight ) {												
      $("header").addClass('fixed');
      } else {
      $("header").removeClass('fixed');
      }
    }); 



// MAGNIFIC POPUP FOR PORTFOLIO PAGE
function magnific()  {    
  if ($('.lightbox-icon, .lightbox .image').length) {
    $('.lightbox-icon, .lightbox .image').magnificPopup({
          type:'image',
          gallery:{enabled:true},
          zoom:{enabled: true, duration: 300}
      });
    }

   // LIGHTBOX VIDEO
  $('.video-icon').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });
}

magnific();
  

  // SCROLL ANIMATION
  new WOW({ offset: 200, mobile: false }).init();
  

  //CLIENT SLIDER JS
  $(".bxslider").bxSlider({
    minSlides: 1,
    maxSlides: 4,
    slideWidth: 300,
    slideMargin: 0,
    ticker: true,
    speed: 30000
  });







}); // document read end 



