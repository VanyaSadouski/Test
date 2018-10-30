$('#js-button-log').click(function () {
    console.log(2312);
    $('.js-overlay-log').fadeIn();
    $('.js-overlay-log').addClass('disabled');

});

$('.js-close-log').click(function () {
    $('.js-overlay-log').fadeOut();
});

$(document).mouseup(function (e) {
    let popup = $('.js-popup-log');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-log').fadeOut();

    }
});

$('.js-button-campaign').click(function () {

    $('.js-overlay-campaign').fadeIn();
    $('.js-overlay-campaign').addClass('disabled');
});


$('.js-close-campaign').click(function () {
    $('.js-overlay-campaign').fadeOut();

});

$(document).mouseup(function (e) {
    let popup = $('.js-popup-campaign');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign').fadeOut();

    }
});





