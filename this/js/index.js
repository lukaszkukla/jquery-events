$(document).ready(function() {
    //  $(".box").on("click", function() {
    //     var classNames = $(this).attr('class').split(' ');
    //     $('.' + classNames[1]).css('background', 'red')
    // })

    $('.box').on('click', function() {
        /**
         * When we click on the elelemnt that
         * has a box class this event will be fired
         */
        var classNames = $(this).attr('class').split(' ');
        var boxClass = classNames[0];
        var className = classNames[1];
        if($(this).css('background-color') == 'rgb(255, 0, 0)') {
            // if this object is alredy red, turn it black
            $('.' + className).css('background-color', '#000');
        } else {
            // else turn all elements with a box class black
            // and then change the color of all elements
            // with the same class name as the clicked element
            // to red
            $('.' + boxClass).css('background-color', '#000');
            $('.' + className).css('background-color', 'red')
        }
    })
});

$('p').click(function() {
    $(this).slideToggle('slow')
});

$('button').mouseenter(function() {
    $(this).removeClass('make-red').addClass('make-blue')
});

$('button').mouseenter(function() {
    $(this).removeClass('make-blue').addClass('make-red')
});
