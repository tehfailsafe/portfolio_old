//= require jquery
//= require_tree .




$(function(){ 
  // $(document).foundation();

  var $grid = $('.filterable-grid'),
      $sizer = $grid.find('.shuffle__sizer');
  $grid.imagesLoaded( function(){
    $grid.shuffle({
      itemSelector: '.project',
      sizer: $sizer
    });
  });
  
});



if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
}