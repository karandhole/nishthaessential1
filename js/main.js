/*Theme Scripts */

(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });
             
/*=========================================================================
	Sticky Header
=========================================================================*/
    function headerHeight(){
        var height = $("#header").height();
        $('.header-height').css('height', height+'px');
    }

	$(function() {
		var header = $("#header"),
			yOffset = 0,
			triggerPoint = 80;
        headerHeight();
        $(window).resize(headerHeight);
		$(window).on( 'scroll', function() {
			yOffset = $(window).scrollTop();

			if (yOffset >= triggerPoint) {
				header.addClass("navbar-fixed-top animated slideInDown");
			} else {
				header.removeClass("navbar-fixed-top animated slideInDown");
			}

		});
	});
 /* active header option*/
 
 $(document).ready(function() {
    // Get the current URL path
    var currentPath = window.location.pathname.split("/").pop();

    // If the path is empty (root URL), set it to the default page (e.g., index.html)
    if (currentPath === '') {
        currentPath = 'index.html'; // Change this if your default page is different
    }

    // Loop through each nav link
    $('.nav a').each(function() {
        var $this = $(this);

        // Compare the link's href attribute with the current path
        if ($this.attr('href') === currentPath) {
            $this.addClass('active');
        } else {
            $this.removeClass('active');
        }
    });
});


/*=========================================================================
	Main Slider
=========================================================================*/ 

    $(document).ready(function () {
        $('#main-slider').on('init', function (e, slick) {
            var $firstAnimatingElements = $('div.single-slide:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });

        $('#main-slider').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('div.single-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });

        $('#main-slider').slick({
            autoplay: true,
            autoplaySpeed: 5000, // Adjust autoplay speed to 5 seconds
            dots: true,
            fade: true,
            arrows: false,
            infinite: true,
            speed: 1000, // Adjust speed to 1 second
            cssEase: 'linear'
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animate__animated ' + 'animate__' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay,
                    'visibility': 'visible' // Ensure the element is visible during animation
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    });



/*=========================================================================
        Mobile Menu
=========================================================================*/  
    $('.menu-wrap ul.nav').slicknav({
        prependTo: '.header-section .navbar',
        label: '',
        allowParentLinks: true
    });
             
/*=========================================================================
    About Carousel
=========================================================================*/
    $('#about-carousel').owlCarousel({
        loop: true,
        margin: 25,
        autoplay: true,
        smartSpeed: 800,
        nav: true,
        navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
        dots: false,
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 1,
            },
            768 : {
                items: 1,
            },
            992 : {
                items: 1,
            }
        }
    });

    /* second page slider */
    document.addEventListener('DOMContentLoaded', function () {
        // Sidebar Navigation
        const sidebarLinks = document.querySelectorAll('.side-navbar a');
        const sections = document.querySelectorAll('.container-area .wrapper > div');
        
        sidebarLinks.forEach((link, index) => {
            link.addEventListener('click', () => {
                // Scroll to the corresponding section
                sections[index].scrollIntoView({ behavior: 'smooth' });
    
                // Update active state
                sidebarLinks.forEach(item => item.classList.remove('current'));
                link.classList.add('current');
            });
        });
    
        // Intersection Observer to highlight active section in sidebar
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };
    
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Array.from(sections).indexOf(entry.target);
                    sidebarLinks.forEach(link => link.classList.remove('current'));
                    sidebarLinks[index].classList.add('current');
                }
            });
        };
    
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach(section => observer.observe(section));
    });

    
/*=========================================================================
    Projects Carousel
=========================================================================*/
    $('#projects-carousel').owlCarousel({
        loop: true,
        margin: 5,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
        dots: false,
        responsive : {
            0 : {
                items: 1
            },
            580 : {
                items: 2,
            },
            768 : {
                items: 2,
            },
            992 : {
                items: 4,
            }
        }
    });

/*=========================================================================
    Projects Carousel 2
=========================================================================*/
    $('#project-carousel-2').owlCarousel({
        loop: true,
        margin: 25,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
        dots: true,
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 1,
            },
            768 : {
                items: 2,
            },
            992 : {
                items: 1,
            }
        }
    });

/*=========================================================================
    Project Single Carousel
=========================================================================*/
    $('#project-single-carousel').owlCarousel({
        loop: true,
        margin: 5,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
        dots: true,
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 1,
            },
            768 : {
                items: 1,
            },
            992 : {
                items: 1,
            }
        }
    });  

/*=========================================================================
    Testimonial Carousel
=========================================================================*/
    $('#testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        center: false,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
        dots: true,
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 1,
            },
            768 : {
                items: 1,
            },
            992 : {
                items: 2,
            }
        }
    });

    /*=========================================================================
    Testimonial Carousel new
=========================================================================*/
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
/*=========================================================================
    Sponsor Carousel
=========================================================================*/
    $('#sponsor-carousel').owlCarousel({
        loop: true,
        margin: 5,
        center: false,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
        dots: false,
        responsive : {
            0 : {
                items: 2
            },
            480 : {
                items: 3,
            },
            768 : {
                items: 3,
            },
            992 : {
                items: 6,
            }
        }
    });
             
/*=========================================================================
	Counter Up Active
=========================================================================*/
	var counterSelector = $('.counter');
	counterSelector.counterUp({
		delay: 10,
		time: 1000
	});

/*=========================================================================
    Vdeo Background
=========================================================================*/
    $(".video-bg").YTPlayer();                              
             
/*=========================================================================
	Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});
	 
/*=========================================================================
	Scroll To Top
=========================================================================*/ 
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

/*=========================================================================
	WOW Active
=========================================================================*/ 
   new WOW().init();

/*=========================================================================
    Active venobox
=========================================================================*/
    $('.img-popup').venobox({
        numeratio: true,
        infinigall: true
    });
             
/*=========================================================================
	MAILCHIMP
=========================================================================*/ 

    if ($('.subscribe_form').length>0) {
        /*  MAILCHIMP  */
        $('.subscribe_form').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "//alexatheme.us14.list-manage.com/subscribe/post?u=48e55a88ece7641124b31a029&amp;id=361ec5b369" 
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-success').text(resp.msg).fadeIn();
            $('.subscription-error').fadeOut();

        } else if(resp.result === 'error') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-error').text(resp.msg).fadeIn();
        }
    }
    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter your email',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };

    /* slider section*/
       // Access the Images
       document.addEventListener('DOMContentLoaded', () => {
        // Access the slide elements
        let slideImages = document.querySelectorAll('.slide');
        // Access the next and prev buttons
        let next = document.querySelector('.next');
        let prev = document.querySelector('.prev');
        // Access the indicators
        let dots = document.querySelectorAll('.dot');
    
        let counter = 0;
    
        // Update slide function
        function updateSlide(newIndex) {
            slideImages[counter].classList.remove('active');
            slideImages[newIndex].classList.add('active');
            counter = newIndex;
            updateIndicators();
        }
    
        // Code for next button
        next.addEventListener('click', () => {
            let newIndex = (counter + 1) % slideImages.length;
            updateSlide(newIndex);
        });
    
        // Code for prev button
        prev.addEventListener('click', () => {
            let newIndex = (counter - 1 + slideImages.length) % slideImages.length;
            updateSlide(newIndex);
        });
    
        // Auto sliding
        // let autoSlideInterval;
        // function autoSliding() {
        //     autoSlideInterval = setInterval(() => {
        //         let newIndex = (counter + 1) % slideImages.length;
        //         updateSlide(newIndex);
        //     }, 3000);
        // }
        // autoSliding();
    
        // // Stop auto sliding when mouse is over
        // const container = document.querySelector('.slide-container');
        // container.addEventListener('mouseover', () => {
        //  clearInterval(autoSlideInterval);
        //  });
    
        // // Resume sliding when mouse is out
        // container.addEventListener('mouseout', autoSliding);
    
        // // Update indicators
        // function updateIndicators() {
        //     dots.forEach(dot => dot.classList.remove('active'));
        //     dots[counter].classList.add('active');
        // }
    
        // Add click event to the indicator
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateSlide(index);
            });
        });
    
        // Initialize slides
        slideImages[0].classList.add('active');
        updateIndicators();
    });
    
     

/*=========================================================================
    Google Map Settings
=========================================================================*/
    if($("body").hasClass("contact-page")){
        google.maps.event.addDomListener(window, 'load', init);

        function init() {

            var mapOptions = {
                zoom: 11,
                center: new google.maps.LatLng(40.6700, -73.9400), 
                scrollwheel: false,
                navigationControl: false,
                mapTypeControl: false,
                scaleControl: false,
                draggable: false,
                styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
            };

            var mapElement = document.getElementById('google-map');

            var map = new google.maps.Map(mapElement, mapOptions);

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.6700, -73.9400),
                map: map,
                title: 'Location!'
            });
        }
    }
    

})(jQuery);

