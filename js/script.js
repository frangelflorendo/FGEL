$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
        if (this.scrollY > 20) {
            $('.menu li a').addClass('color');
        } else {
            $('.menu li a').removeClass('color');
        }
        if (this.scrollY > 20) {
            $('.navbar .logo a').addClass('color');
        } else {
            $('.navbar .logo a').removeClass('color');
        }
        if (this.scrollY > 20) {
            $('.navbar .menu li a').addClass('text');
        } else {
            $('.navbar .menu li a').removeClass('text');
        }
        if (this.scrollY > 20) {
            $('.navbar').addClass('shadow');
        } else {
            $('.navbar').removeClass('shadow');
        }

        if (this.scrollY > 20) {
            $('.burger-ka-saken img').addClass('img');
        } else {
            $('.burger-ka-saken img').removeClass('img');
        }
    });
    $('.menu li a, .navbar .logo a').click(function() {
        $('html').css('scrollBehavior', 'smooth');
    })
    $('.burger-ka-saken').click(function() {
        $('.navbar .menu').toggleClass('active');
        // $('.navbar .max-width .burger-ka-saken img').toggleClass('actives');
    })
    $('.navbar .menu li a').click(function() {
        $('.navbar .menu').toggleClass('active');
    })
});