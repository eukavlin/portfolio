$(document).ready(function() {
    $('.gotoport').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });
});

$(document).ready(function() {
    $('.gotoab').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });
});

$(document).ready(function() {
    $('.gotocont').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });
});

$(document).ready(function() {
    $('.gotop').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });
});

$(function() {
    let mainheight = document.getElementById('main').offsetHeight;
    $(window).scroll(function() { //Au scroll dans la fenetre on déclenche la fonction
        if ($(this).scrollTop() > -80 + mainheight) { //quand la fin de la main page est atteinte.
            $('#navigation').addClass("fixed"); //on ajoute la classe "fixNavigation" à <div id="navigation">
        } else {
            $('#navigation').removeClass("fixed"); //sinon on retire la classe "fixNavigation" à <div id="navigation">
        }
    });
});
