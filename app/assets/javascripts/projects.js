$(function(){ 
  var $grid = $('.filterable-grid');

  $grid.imagesLoaded( function(){
    $grid.shuffle({
      itemSelector: '.project',
      sizer: $grid.find('.shuffle__sizer'),
      group: 'all'
    });
    $grid.attr("style", "opacity:1");
    $('#loading').hide();
  });



  var $filterItems = $('.filter .item'); 
  $filterItems.click( function(){
    $filterItems.removeClass('active');
    var $filter = $(this).attr('class').split(' ').last();
    $(this).addClass('active');
    $grid.shuffle('shuffle', $filter);
  });
});