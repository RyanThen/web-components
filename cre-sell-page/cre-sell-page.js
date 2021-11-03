// keep track of number of package cards
const $numberOfPackages = $('.cre__grid-card').length;


////--- Build value prop items on mobile ---\\\\
const $valuePropItems = $('.cre__value-prop-container');

let $valuePropHTML;
let gridColumnCounter1;
let gridColumnCounter2;
let gridColumnCounter3;
let gridColumnCounter4;

$.each($valuePropItems, function(i) { 
  // clone and store value prop html
  $valuePropHTML = $('.cre__grid-area-' + (i + 2)).clone().html();
         
  // inject corresponding html into each value prop grid cell
  gridColumnCounter1 = 41 + i;
  gridColumnCounter2 = 81 + i;
  gridColumnCounter3 = 121 + i;
  gridColumnCounter4 = 161 + i;
  $('.cre__grid-area-' + gridColumnCounter1).append($valuePropHTML);
  $('.cre__grid-area-' + gridColumnCounter2).append($valuePropHTML);
  $('.cre__grid-area-' + gridColumnCounter3).append($valuePropHTML);
  $('.cre__grid-area-' + gridColumnCounter4).append($valuePropHTML);
});


////--- Value props click event ---\\\\
$('.cre__value-prop-container, .cre__value-prop-item').on('click', function(e) { 
  const $this = $(this);
  
  // toggle value prop description
  $this.find('.cre__value-prop--expand').slideToggle('slow');
  
  // animate value prop area open/close
  if($this.find('.cre__value-prop-arrow').hasClass('rotate-animation')) {
    $this.find('.cre__value-prop-arrow').removeClass('rotate-animation');
    $this.find('.cre__value-prop-heading').css({ color: '#424242', transition: '350ms' })
  } else {
    $this.find('.cre__value-prop-arrow').addClass('rotate-animation');
    $this.find('.cre__value-prop-heading').css({ color: '#000000', transition: '350ms' })
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


////--- Mobile package navigation ---\\\\
const $creCarouselDotsGridArea = $('.cre__carousel-dots-grid-area');

// create carousel dots
$.each($creCarouselDotsGridArea, function(i, dotGridArea) {
  $.each($creCarouselDotsGridArea, function(j, dot){   
    dotGridArea.insertAdjacentHTML('beforeend', `                                
      <div class="cre__carousel-dot cre__carousel-dot-${j + 1}"></div>
    `)
  }) 
});

// add highlight class to first carousel dot
$('.cre__carousel-dots-grid-area-1 .cre__carousel-dot-1').addClass('cre__dot--focus');


// enable carousel dots navigation
let crePackageCounter = 1;
const $creCarouselDots = $('.cre__carousel-dot');

$creCarouselDots.on('click', function(e){
  // navigate to correct package
  $('.cre__grid-area').removeClass('cre__mobile-package-show');
  crePackageCounter = ($(this).index()) + 1;
  $('.cre__package-' + (crePackageCounter)).addClass('cre__mobile-package-show');
  // highlight correct dot
  $('.cre__carousel-dot').removeClass('cre__dot--focus');
  $('.cre__carousel-dot-' + crePackageCounter).addClass('cre__dot--focus');
})


// next/previous mobile package arrow click
const $carouselArrows = $('.cre__carousel-arrow');
const $mobilePrevious = $('.cre__mobile-previous');
const $mobileNext = $('.cre__mobile-next');

// on arrow click
$carouselArrows.on('click', function(e){
  
  // if previous button click
  if(e.target.parentElement.classList.contains('cre__mobile-previous')) {
    
    // show correct package and hide all others
    $('.cre__grid-area').removeClass('cre__mobile-package-show');
    crePackageCounter--;
    if(crePackageCounter < 1) crePackageCounter = $numberOfPackages;
    $('.cre__package-' + crePackageCounter).addClass('cre__mobile-package-show');
    
    // highlight correct carousel dot
    if($('.cre__carousel-dots-grid-area-' + crePackageCounter).hasClass('cre__package-' + crePackageCounter)) {
      // remove highlight class from previous dot
      $('.cre__carousel-dot').removeClass('cre__dot--focus');
      // add highlight class to dot
      $('.cre__carousel-dots-grid-area-' + crePackageCounter + ' .cre__carousel-dot-' + crePackageCounter).addClass('cre__dot--focus');
    }

  }
  
  // if next button arrow click
  if(e.target.parentElement.classList.contains('cre__mobile-next')) {  
    
    // show correct package and hide all others
    $('.cre__grid-area').removeClass('cre__mobile-package-show'); 
    crePackageCounter++;
    if(crePackageCounter > $numberOfPackages) crePackageCounter = 1;
    $('.cre__package-' + crePackageCounter).addClass('cre__mobile-package-show'); 
    
    // highlight correct carousel dot
    if($('.cre__carousel-dots-grid-area-' + crePackageCounter).hasClass('cre__package-' + crePackageCounter)) {
      // remove highlight class from previous dot
      $('.cre__carousel-dot').removeClass('cre__dot--focus');
      // add highlight class to dot
      $('.cre__carousel-dots-grid-area-' + crePackageCounter + ' .cre__carousel-dot-' + crePackageCounter).addClass('cre__dot--focus');
    }
    
  }
  
});


////--- Delivery method dropdown ---\\\\
const $deliveryMethodDropdownContainer = $('.cre__delivery-method-dropdown-container');
const $deliveryMethodClickable = $('.cre__delivery-method-clickable');
const $deliveryMethodDropdown = $('.cre__delivery-method-dropdown');

let arrowState = 'no-rotate';

$deliveryMethodClickable.on('click', function(){
  $deliveryMethodDropdown.slideToggle('fast');
  
  if(arrowState === 'no-rotate') {
    $('.cre__delivery-method-icon').css({ /*transform: 'rotate(180deg)'*/ transform: 'scaleY(-1)', transition: '350ms' });
    arrowState = 'rotate';
    return arrowState;
  }
  
  if(arrowState === 'rotate') {
    $('.cre__delivery-method-icon').css({ /*transform: 'rotate(0deg)'*/ transform: 'scaleY(1)', transition: '350ms' });
    arrowState = 'no-rotate';
    return arrowState;
  }
});


// Top left grid dropdown height fix for tablet
const $creDropdownHeight = $('.cre__delivery-method-dropdown-container').height();
$('.cre__delivery-method-dropdown-container-outer').css({ height: $creDropdownHeight });


// Fixed border on last grid column (desktop)
const mobileMediaQuery = window.matchMedia('(min-width: 850px)');
if (mobileMediaQuery.matches) {
  $('.cre__package-' + $numberOfPackages + ':not(.cre__grid-card), .cre__package-' + $numberOfPackages + ' .cre__card-container').css({ borderRight: '3px solid #d1d2d4' })
}


// Set equal height card titles
const $cardTitles = $('.cre__card-title');
const cardTitleTallest = Math.max($cardTitles.height());

$.each($cardTitles, function(i, cardTitle) {
  $(cardTitle).css({ height: cardTitleTallest });
});







