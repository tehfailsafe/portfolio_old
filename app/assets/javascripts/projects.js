var $grid = $('.filterable-grid');
$grid.attr("style", "visibility:hidden");

function shuffle(filter){
  $grid.shuffle({
    itemSelector: '.project',
    sizer: $grid.find('.shuffle__sizer'),
    group: filter
  });
  $grid.attr("style", "visibility:visible");


}

$grid.imagesLoaded( function(){
  shuffle('all');
});



var $filterItems = $('.filter .item'); 
$filterItems.click( function(){
  $filterItems.removeClass('active');
  var $filter = $(this).attr('class').split(' ').last();
  $(this).addClass('active');
  $grid.shuffle('shuffle', $filter);
});
