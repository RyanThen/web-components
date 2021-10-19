// keep track of number of package cards
const $numberOfPackages = $('.cre__grid-card').length;

////--- Build value prop items on mobile ---\\\\
const $valuePropItems = $('.cre__value-prop-container');

let $valuePropHTML;
let gridColumnCounter1;
let gridColumnCounter2;
let gridColumnCounter3;
let gridColumnCounter4;

$.each($valuePropItems, function(i, el) { 
  // get value prop html
  $valuePropHTML = $('.cre__grid-area-' + (i + 2)).clone().html();
         
  // inject corresponding html into each value prop
  gridColumnCounter1 = 31 + i;
  gridColumnCounter2 = 61 + i;
  gridColumnCounter3 = 91 + i;
  gridColumnCounter4 = 121 + i;
  $('.cre__grid-area-' + gridColumnCounter1).append($valuePropHTML);
  $('.cre__grid-area-' + gridColumnCounter2).append($valuePropHTML);
  $('.cre__grid-area-' + gridColumnCounter3).append($valuePropHTML);
  $('.cre__grid-area-' + gridColumnCounter4).append($valuePropHTML);
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


////--- Value props click event ---\\\\
$('.cre__value-prop-container, .cre__value-prop-item').on('click', function(e) { 
  const $this = $(this);
  
  // toggle value prop description
  $this.find('.cre__value-prop--expand').slideToggle('slow');
  
  // animate value prop area open/close
  if($this.find('.cre__value-prop-arrow').hasClass('rotate-animation')) {
    $this.find('.cre__value-prop-arrow').removeClass('rotate-animation');
    $this.find('.cre__value-prop-heading').css({ fontWeight: 400, transition: '350ms' })
  } else {
    $this.find('.cre__value-prop-arrow').addClass('rotate-animation');
    $this.find('.cre__value-prop-heading').css({ fontWeight: 700, transition: '350ms' })
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

////--- Mobile package navigation (next/previous arrow click) ---\\\\
const $carouselArrows = $('.cre__carousel-arrow');
const $mobilePrevious = $('.cre__mobile-previous');
const $mobileNext = $('.cre__mobile-next');

let crePackageCounter = 1;

$carouselArrows.on('click', function(e){
  console.log(e.target);
  if(e.target.parentElement.classList.contains('cre__mobile-previous')) {
    $('.cre__package-' + crePackageCounter).removeClass('cre__mobile-package-show');
    crePackageCounter--;
    if(crePackageCounter < 1) crePackageCounter = $numberOfPackages;
    $('.cre__package-' + crePackageCounter).addClass('cre__mobile-package-show');
  }
  
  if(e.target.parentElement.classList.contains('cre__mobile-next')) {  
    $('.cre__package-' + crePackageCounter).removeClass('cre__mobile-package-show'); 
    crePackageCounter++;
    if(crePackageCounter > $numberOfPackages) crePackageCounter = 1;
    $('.cre__package-' + crePackageCounter).addClass('cre__mobile-package-show'); 
  }  
  
});


// Delivery method dropdown
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
const creDropdownHeight = $('.cre__delivery-method-dropdown-container').height();
$('.cre__delivery-method-dropdown-container-outer').css({ height: creDropdownHeight });









