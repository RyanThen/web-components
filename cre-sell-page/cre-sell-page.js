// Build value prop items on mobile
const $valuePropItems = $('.cre__value-prop-container');

$.each($valuePropItems, function(i, el) { 
  // get value prop html
  const $valuePropHTML = $('.cre__grid-area-' + (i + 2)).clone().html();
  
  // inject corresponding html into each value prop
  const gridColumnCounter1 = 31 + i;
  const gridColumnCounter2 = 61 + i;
  const gridColumnCounter3 = 91 + i;
  $('.cre__grid-area-' + gridColumnCounter1).append($valuePropHTML);
  $('.cre__grid-area-' + gridColumnCounter2).append($valuePropHTML);
  $('.cre__grid-area-' + gridColumnCounter3).append($valuePropHTML);
});

//for(let i = 1; i < $valuePropItems.length + 1; i++) {
//  // get value prop html
//  const $valuePropHTML = $('.cre__grid-area-' + (i + 1)).clone().html();
//  
//  // inject corresponding html into each value prop
//  const gridColumnCounter1 = 30 + i;
//  const gridColumnCounter2 = 60 + i;
//  const gridColumnCounter3 = 90 + i;
//  $('.cre__grid-area-' + gridColumnCounter1).append($valuePropHTML);
//  $('.cre__grid-area-' + gridColumnCounter2).append($valuePropHTML);
//  $('.cre__grid-area-' + gridColumnCounter3).append($valuePropHTML);
//}

// Value props click event
$('.cre__value-prop-container, .cre__value-prop-item').on('click', function(e) { 
  const $this = $(this);
  
  // toggle value prop description
  $this.find('.cre__value-prop--expand').slideToggle('slow');
  
  // animate value prop area open/close
  if($this.find('.cre__value-prop-arrow').hasClass('rotate-animation')) {
    $this.find('.cre__value-prop-arrow').removeClass('rotate-animation');
  } else {
    $this.find('.cre__value-prop-arrow').addClass('rotate-animation');
  }
});

//$('#grid-container').on('click', function(e) {
//  
//  const targetEl = $(e.target)[0].bind(this);
//  const targetParentEl = $(targetEl.parentElement)[0];
//  const targetParentParentEl = $(targetParentEl.parentElement)[0];
//  
//  console.log(targetParentParentEl);
//  
//  if(targetParentEl.classList.contains('cre__value-prop--clickable')) {
//    targetParentParentEl.find('.cre__value-prop--expand').slideToggle('slow');
//  }
//
//});

// Package navigation on mobile arrow click
const $carouselArrows = $('.cre__carousel-arrow');
const $mobilePrevious = $('.cre__mobile-previous');
const $mobileNext = $('.cre__mobile-next');

let crePackageCounter = 1;

$carouselArrows.on('click', function(e){
  
  if(e.target.parentElement.classList.contains('cre__mobile-previous')) {
    $('.cre__package-' + crePackageCounter).removeClass('cre__mobile-package-show');
    crePackageCounter--;
    if(crePackageCounter < 1) crePackageCounter = 3;
    $('.cre__package-' + crePackageCounter).addClass('cre__mobile-package-show'); 
  }
  
  if(e.target.parentElement.classList.contains('cre__mobile-next')) {  
    $('.cre__package-' + crePackageCounter).removeClass('cre__mobile-package-show'); 
    crePackageCounter++;
    if(crePackageCounter > 3) crePackageCounter = 1;
    $('.cre__package-' + crePackageCounter).addClass('cre__mobile-package-show'); 
  }
  
});
















