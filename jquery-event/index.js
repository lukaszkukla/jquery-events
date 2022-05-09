$('p').click(function() {
    $(this).css('color', 'red')
});

$('h2').hover(function() {
    $(this).css('background', 'lightblue')
});

$('.card-panel').mouseenter(function() {
    $('body').css('background', 'black')
});

$('.card-panel').mouseleave(function() {
    $('body').css('background', '#e1e2e2')
});