function scrollToAnchor(anchor_id){
    var tag = $("#"+anchor_id+"");
    $('html,body').animate({scrollTop: tag.offset().top},'slow');
}


$(document).ready(function() {
	$("#nav_pictures").click(function() {
	   scrollToAnchor('pictures');
	});
});


$(document).ready(function() {
	$("#nav_blog").click(function() {
	   scrollToAnchor('blog');
	});
});


$(document).ready(function() {
	$("#nav_contact").click(function() {
	   scrollToAnchor('contact');
	});
});


$(document).ready(function() {
	$("#nav_about").click(function() {
	   scrollToAnchor('about');
	});
});


$(document).ready(function() {
	$("#nav_home").click(function() {
	   scrollToAnchor('home');
	});
});


/*
$(function() {
    // Stick the #nav to the top of the window
    var nav = $('#navigation');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: nav.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});
*/