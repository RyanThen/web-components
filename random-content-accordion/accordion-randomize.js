"use strict";

// Randomize partners inside accordions
const jobOpeningsCards = document.querySelectorAll( ".job-openings-container .fp-card-container" );
const jobOpeningsCardsArr = [...jobOpeningsCards];
const jobOpeningsContainter = document.querySelector( ".job-openings-container" );

const hiringBrokeragesCards = document.querySelectorAll( ".hiring-brokerages-container .fp-card-container" );
const hiringBrokeragesCardsArr = [...hiringBrokeragesCards];
const hiringBrokeragesContainer = document.querySelector( ".hiring-brokerages-container" );

let i = 0;
let random;
const spacing = "<hr>";

// clear html inside containers
jobOpeningsContainter.innerHTML = "";
hiringBrokeragesContainer.innerHTML = "";

// build randomized html inside containers
const randomizeElements = function (elementArray, elementContainer) {
  while (i < elementArray.length) {
    // generate random num between 0 and arraylength-1
    random = Math.floor( Math.random() * elementArray.length );
    // if element hasn't been marked as "selected"
    if (!elementArray[random].classList.contains( "selected" )) {
      elementContainer.insertAdjacentHTML( "beforeend", elementArray[random].outerHTML /* + spacing */ );
      // mark element as selected
      elementArray[random].classList.add( "selected" );
      i++;
    }
  }
  i = 0;
};

randomizeElements(jobOpeningsCardsArr, jobOpeningsContainter);
randomizeElements(hiringBrokeragesCardsArr, hiringBrokeragesContainer);

// Accordion functionality
const accordionTitle1 = jQuery( "#accordion-title-1" );
const accordionTitle2 = jQuery( "#accordion-title-2" );
const jobOpeningsContainerOuter = jQuery( ".job-openings-container-outer" );
const hiringBrokeragesContainerOuter = jQuery( ".hiring-brokerages-container-outer" );

accordionTitle1.click(function () {
  jobOpeningsContainerOuter.slideToggle( "slow" );
  if (accordionTitle1.hasClass( "acc-open" )) {
    document.querySelector( ".fa-plus-1" ).style.display = "block";
    document.querySelector( ".fa-minus-1" ).style.display = "none";
    accordionTitle1.removeClass("acc-open");
  } else {
    document.querySelector( ".fa-plus-1" ).style.display = "none";
    document.querySelector( ".fa-minus-1" ).style.display = "block";
    accordionTitle1.addClass( "acc-open" );
  }
});

accordionTitle2.click(function () {
  hiringBrokeragesContainerOuter.slideToggle( "slow" );
  if (accordionTitle2.hasClass( "acc-open" )) {
    document.querySelector( ".fa-plus-2" ).style.display = "block";
    document.querySelector( ".fa-minus-2" ).style.display = "none";
    accordionTitle2.removeClass( "acc-open" );
  } else {
    document.querySelector( ".fa-plus-2" ).style.display = "none";
    document.querySelector( ".fa-minus-2" ).style.display = "block";
    accordionTitle2.addClass( "acc-open" );
  }
});