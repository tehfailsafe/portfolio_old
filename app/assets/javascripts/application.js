//= require jquery
//= require jquery_ujs
//= require foundation
//= require masonry/jquery.masonry
//= require_tree .


$(function(){ 
  $(document).foundation();
  var $container = $('#masonry-container');
  $container.imagesLoaded( function(){
    $container.masonry({
      itemSelector: '.project',
      isFitWidth: true,
      isAnimating: true
    });
  });
});


