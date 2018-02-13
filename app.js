console.log('boop');

$(function() {
  $('.box').hide();
});

$('button').on('click',function(event) {
event.preventDefault();
var searchInput = $('#search').val()
var $brush = $('.brush');
$brush.css("background-color",searchInput);
$('.box').show();

$(document).ready(function () {
    var $newdiv = $('<div class="squares" />');
    for (var i = 0; i < 100; i++) {
        $newdiv = $('<div class="squares" />').css("background-color",searchInput);
        $('.box').append($newdiv);

    }
  });
});
