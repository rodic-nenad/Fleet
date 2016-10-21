$( document ).ready(function(){ 

    $('#mobileNavOpen').click(function() {
        $('span.iconTraka').toggle();
        $('nav.mobile').toggle();
        $('span.iconFirst').toggleClass('activeToggleFirst');
        $('span.iconLast').toggleClass('activeToggleLast');
        return false;
    });

});
