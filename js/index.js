AOS.init({
    offset: 10,
    duration: 5000,
});



function toggleButton() {
    var x = document.getElementById("dropdown_container");
    if (x.classList.contains('newClass')) {
        x.classList.remove('newClass');
    } else {
        setTimeout(function () {
            x.classList.add('newClass');
        }, 450);
    }
    if (x.style.display === "block") {
        setTimeout(function () {
            x.style.display = "none";
        }, 350);
    } else {
        setTimeout(function () {
            x.style.display = "block";
        }, 300);
        // $(".dropdown_container_innner").fadeIn(3000);
    }


}

jQuery(document).ready(function () {
    jQuery(".nav_icon").click(function () {
        jQuery(".nav_icon").toggleClass("nav_icon_open");
    });
});







/* hover memu button js*/
class HoverButton {
    constructor(el) {
        this.el = el;
        this.hover = false;
        this.calculatePosition();
        this.attachEventsListener();
    }

    attachEventsListener() {
        window.addEventListener('mousemove', e => this.onMouseMove(e));
        window.addEventListener('resize', e => this.calculatePosition(e));
    }

    calculatePosition() {
        gsap.set(this.el, {
            x: 0,
            y: 0,
            scale: 1
        });

        const box = this.el.getBoundingClientRect();
        this.x = box.left + box.width * 0.5;
        this.y = box.top + box.height * 0.5;
        this.width = box.width;
        this.height = box.height;
    }

    onMouseMove(e) {
        let hover = false;
        let hoverArea = this.hover ? 0.7 : 0.5;
        let x = e.clientX - this.x;
        let y = e.clientY - this.y;
        let distance = Math.sqrt(x * x + y * y);
        if (distance < this.width * hoverArea) {
            hover = true;
            if (!this.hover) {
                this.hover = true;
            }
            this.onHover(e.clientX, e.clientY);
        }

        if (!hover && this.hover) {
            this.onLeave();
            this.hover = false;
        }
    }

    onHover(x, y) {
        gsap.to(this.el, {
            x: (x - this.x) * 0.4,
            y: (y - this.y) * 0.4,
            scale: 1.15,
            ease: 'power2.out',
            duration: 0.4
        });

        this.el.style.zIndex = 10;
    }
    onLeave() {
        gsap.to(this.el, {
            x: 0,
            y: 0,
            scale: 1,
            ease: 'elastic.out(1.2, 0.4)',
            duration: 0.7
        });

        this.el.style.zIndex = 1;
    }
}


const btn1 = document.querySelector('.nav_icon');
new HoverButton(btn1);

const btn2 = document.querySelector('.cart_btn');
new HoverButton(btn2);



/* 
.
.
.
.
.
.
*/

/*  Scroll an overflowed element using mousemove */
$("#dropdown_container").mousemove(function (e) {
    pageTop = 200;
    holderHeight = $("#dropdown_container").height();
    scrollHeight = $("#instagram_post_wrapper_inner").height();

    scrollTop = (e.pageY - pageTop) * (100 / holderHeight);
    scrollTopR = Math.round(scrollTop);
    scrollProcent = Math.round(
        (scrollTop / 100) * scrollHeight * (1500 / scrollHeight)
    );

    $("#instagram_post_wrapper_inner").css({
        "margin-top": -scrollProcent + "px",
    });
});



/* Home page slider */
$('.slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1
});
$('.slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    var currentSlide = $('.slider').slick('slickCurrentSlide');
    if (currentSlide == 0) {
        $('body').css('background-color', 'rgb(255, 230, 234)');
    } else if (currentSlide == 1) {
        $('body').css('background-color', 'rgb(225, 242, 251)');
    } else if (currentSlide == 2) {
        $('body').css('background-color', 'rgb(221, 240, 223)');
    }
});
$('body').css({
    transition: 'background-color 0.3s ease-in-out'
});





jQuery(".nav_icon").click(function () {
    setTimeout(function () {
        jQuery("div.topnav").toggleClass("click_white_header");
    }, 300);
});
jQuery(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 230) {
        jQuery("div.topnav").addClass("white_header");
    } else {
        jQuery("div.topnav").removeClass("white_header");
    }
});






/*================ Mixitup ================*/
$(document).ready(function () {
    var mixer = mixitup('.box-list')
})




















/*================ Image vertically moving (scroll) ================*/
$(window).on("load resize scroll", function () {
    $(".img_col, .animated_parent").each(function () {
        var windowTop = $(window).scrollTop();
        var elementTop = $(this).offset().top;
        var leftPosition = windowTop - elementTop;
        $(this)
            .find(".bg_move,.animated_item")
            .css({
                bottom: leftPosition
            });
    });
});
$(window).on("load resize scroll", function () {
    $(".animated_parent_bottom").each(function () {
        var windowTop = $(window).scrollTop();
        var elementTop = $(this).offset().top;
        var leftPosition = windowTop - elementTop;
        $(this)
            .find(".bg_move_bottom")
            .css({
                top: leftPosition
            });
    });
});














jQuery(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 230) {
        jQuery(".contact_page").addClass("contact_page_scroll");
    } else {
        jQuery(".contact_page").removeClass("contact_page_scroll");
    }
});