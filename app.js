console.log('boop');

$('button').on('click',function(event) {
event.preventDefault();
var searchInput = $('#search').val()
var $brush = $('.brush');
$brush.css("background-color",searchInput);

});
