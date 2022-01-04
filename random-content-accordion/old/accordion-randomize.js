"use strict";

//// Randomize cards inside accordions ////
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

//// Accordion functionality ////
const accordionTitle1 = jQuery( "#accordion-title-1" );
const accordionTitle2 = jQuery( "#accordion-title-2" );
const jobOpeningsContainerOuter = jQuery( ".job-openings-container-outer" );
const hiringBrokeragesContainerOuter = jQuery( ".hiring-brokerages-container-outer" );

function accOpenClose(e) {
    const groupTitle = e.currentTarget;
    const groupContainer = groupTitle.parentElement.nextElementSibling.classList.contains("job-openings-container-outer") ? jobOpeningsContainerOuter : hiringBrokeragesContainerOuter;
    
    // open/close container
    groupContainer.slideToggle( "slow" );

    // icon toggle from plus to minus
    if (groupTitle.classList.contains( "acc-open" )) {
      groupTitle.querySelector( ".fa-plus" ).style.display = "block";
      groupTitle.querySelector( ".fa-minus" ).style.display = "none";
      groupTitle.classList.remove( "acc-open" );
    } else {
      groupTitle.querySelector( ".fa-plus" ).style.display = "none";
      groupTitle.querySelector( ".fa-minus" ).style.display = "block";
      groupTitle.classList.add( "acc-open" );
    }
}

accordionTitle1.click(accOpenClose);
accordionTitle2.click(accOpenClose);