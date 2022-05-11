$('button').mouseenter(function() {
    $(this).removeClass('make-red').addClass('make-border')
});

$('button').mouseleave(function() {
    $(this).removeClass('make-border').addClass('make-red')
});