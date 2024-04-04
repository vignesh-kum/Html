	new WOW().init();
(function ($) {
	"use strict";

    var $wn = $(window);
    $wn.on('load',function(){
   jQuery('#loading').fadeOut('slow');
     $('body').delay(350).css({'overflow':'visible'})

        /***************************
         *   Header Fixed  *
         ***************************/
        $wn.on('scroll',function(){
            if ($(this).scrollTop() > 1) {
                $('header').addClass("header-small");
            } else {
                $('header').removeClass("header-small");
            }
        });
    });
	
	 /****************
	 *   Couter up  *
	 ****************/
	var $element = $('.counter');
	if ($element.length > 0) {
		$element.counterUp({
			delay: 10,
			time: 1000
		});
	}

    /***********************
     *   Feature Carousel  *
     ***********************/
    $('.feature-slider').owlCarousel({
        loop: true,
		 autoplay: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 3
            }
        }
    });

	  /***********************
     *   stoery post  *
     ***********************/
    $('.stoerypost').owlCarousel({
        loop: true,
		 autoplay: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 3
            }
        }
    });
    /***********************
     *   testimonial Carousel  *
     ***********************/
    $('.trainers-slider').owlCarousel({
        loop: true,
		 items:3,
		autoplay:true,
        margin: 30,
        nav: false,
		 navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },		
            768: {
                items: 4
            }
        }
    });

        /***********************
     *   team Carousel  *
     ***********************/
    $('.team-slider').owlCarousel({
        loop: true,
		 items:3,
		 autoplay:true,
        margin: 30,
        nav: true,
		 navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            530: {
                items: 1
            },
			
			 600: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });

	      /***********************
     *   enent Carousel  *
     ***********************/
    $('.event-slider').owlCarousel({
        loop: true,
		 items:5,
		  autoplay:true,
        margin: 30,
        nav: true,
		 navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            530: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });
    /***********************
     *   enent Carousel  *
     ***********************/
    $('.porduct-slider').owlCarousel({
        loop: true,
		 items:5,
		  autoplay:true,
        margin: 30,
        nav: true,
		 navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
			 768: {
                items: 4
            },
            800: {
                items: 4
            },
			 1000: {
                items: 5
            }
        }
    });
	
	
	  /***********************
     *   enent Carousel  *
     ***********************/
    $('.event-slider2').owlCarousel({
        loop: true,
		 items:5,
		  autoplay:true,
        margin: 30,
        nav: true,
		 navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 3
            }
        }
    });
	
     /***********************
     *   blog Carousel  *
     ***********************/
    $('.blog-cursol').owlCarousel({
        loop: true,
		 items:5,
		  autoplay:true,
        margin: 30,
        nav: true,
		 navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 3
            }
        }
    });
	
		
        /***********************
     *   about testimonial Carousel  *
     ***********************/
    $('.about-testimonial-slider').owlCarousel({
        loop: true,
		 items:5,
		  autoplay:true,
        margin: 30,
        nav: true,
		 navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });
	  /***********************
     *  gallery Carousel  *
     ***********************/
    $('.galler-slider').owlCarousel({
        loop: true,
		 items:5,
		  autoplay:true,
        margin: 30,
        nav: true,
		 navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 4
            }
        }
    });
	
	  /***********************
     *   feature Carousel  *
     ***********************/
    $('.featureslider').owlCarousel({
        loop: true,
		  autoplay:true,
        margin: 30,
        nav: true,
		 navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
       responsive: {
            0: {
                items: 2
            },
            480: {
                items: 4
            },
            800: {
                items: 4
            },
			 1000: {
                items: 8
            }
        }
    });

     /***********************
     *   testimonial Carousel  *
     ***********************/
    $('.testmoniallisting').owlCarousel({
        loop: true,
		 items:5,
		  autoplay:true,
		  autoplaySpeed: 5000,
        margin: 30,
        nav: true,
		 animateOut: 'slideOutUp',
  animateIn: 'slideInUp',
		 navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            }
        }
    });
	
	
    /*---------------------
    screen slider
    --------------------- */
    function screen_slider() {
        var owl = $(".screen-slider");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            navigation: false,
            items: 5,
            smartSpeed: 1000,
            dots: true,
            autoplay: true,
            center: true,
            autoplayTimeout: 2000,
            dotsEach: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                760: {
                    items: 3
                },
                1080: {
                    items: 5
                },
                1920: {
                    items: 5
                }
            }
        });
    }
    screen_slider();
	
	    /*---------------------
    service slider
    --------------------- */
    function service_slider() {
        var owl = $(".service-slider");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            navigation: false,
            items: 1,
            smartSpeed: 1000,
            dots: true,
            autoplay: true,
            center: true,
			animateOut: 'slideOutDown',
			animateIn: 'flipInX',	
            autoplayTimeout: 2000,
            dotsEach: true,
			
            responsive: {
               
                1080: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });
    }
    service_slider();
	
		    /*---------------------
    service slider
    --------------------- */
    function service_slider1() {
        var owl = $(".service-slider1");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            navigation: false,
            items: 1,
            smartSpeed: 1000,
            dots: true,
            autoplay: true,
            center: true,
			 animateIn: 'fadeIn',
              animateOut: 'fadeOut',	
            autoplayTimeout: 2000,
            dotsEach: true,
			
            responsive: {
               
                1080: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });
    }
    service_slider1();
	
  var $owl = $('.screenshort');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
  center: true,
  loop: true,
  items: 5,
   nav: false,
   responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                760: {
                    items: 3
                },
                1080: {
                    items: 5
                },
                1920: {
                    items: 5
                }
            }
   
});

$(document).on('click', '.owl-item>div', function() {
  $owl.trigger('to.owl.carousel', $(this).data( 'position' ) );
});
	 
  

    /***********************
     *  class Schedule Tabs  *
     ***********************/
    $('.classSch-outer .tab_container').hide();
    $('.classSch-outer .tab_container:first').show();
    $('.classSch-outer ul.tabs li:first').addClass('active');
	$(".classSch-outer ul.tabs li a").on('click',function(){
        $('.classSch-outer ul.tabs li').removeClass('active');
        $(this).parent().addClass('active');
        var currentTab = $(this).attr('href');
        $('.classSch-outer .tab_container').hide();
        $(currentTab).show();
        return false;
    });
  
    /***************************
     *   Scroll to top action  *
     ***************************/
    var $element = $('.scroll-top');
    $wn.on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $element.fadeIn();
        } else {
            $element.fadeOut();
        }
    });

    $element.on("click", function () {
        var $scrollElement = $("html, body");
        $scrollElement.animate({
            scrollTop: 0
        }, 600);
        return false;
    }); 
	

  
    $element.on("click", function () {
        var $scrollElement = $("html, body");
        $scrollElement.animate({
            scrollTop: 0
        }, 600);
        return false;
    }); 
	$(function () {

	"use strict";
	var wind = $(window);

	/*==================================
	ScrollIt Setup
	====================================*/

	$.scrollIt({
		upKey: 38, // key code to navigate to the next section
		downKey: 40, // key code to navigate to the previous section
		easing: 'swing', // the easing function for animation
		scrollTime: 600, // how long (in ms) the animation takes
		activeClass: 'active', // class given to the active nav element
		onPageChange: null, // function(pageIndex) that is called when page is changed
		topOffset: -15 // offste (in px) for fixed top navigation
	});


	/*==================================
	Navbar Scrolling Setup
	====================================*/

	wind.on("scroll", function () {
		var bodyScroll = wind.scrollTop(),
			navbar = $(".navbar")
		if (bodyScroll > 300) {
			navbar.addClass("fixed");
		} else {
			navbar.removeClass("fixed");
		}
	});



});
$('.iq-accordion .iq-ad-block .ad-details').hide();
    $('.iq-accordion .iq-ad-block:first').addClass('ad-active').children().slideDown('slow');
    $('.iq-accordion .iq-ad-block').on("click", function() {
        if ($(this).children('div').is(':hidden')) {
            $('.iq-accordion .iq-ad-block').removeClass('ad-active').children('div').slideUp('slow');
            $(this).toggleClass('ad-active').children('div').slideDown('slow');
        }
    });
	 
})(jQuery);
