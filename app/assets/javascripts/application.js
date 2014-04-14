
//= require_tree .

function stickFooter(){
  var footer = $("#footer");
  var pos = footer.position();
  var height = $(window).height();
  height = height - pos.top;
  height = height - footer.height();
  if (height > 0) {
      footer.css({
          'margin-top': height + 'px',
          'opacity': 1
      });
  }

}



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
  

  setTimeout(stickFooter, 100);


});




if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
}


