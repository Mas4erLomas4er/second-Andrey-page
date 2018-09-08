$(document).ready(function () {
    $('a').attr('target', 'blank');
    $('.social-button').click(function () {
        $('.social').toggle(500);
        $('.icon-bar').toggleClass('open');
    })
});