// ADD FULL WIDTH CLASS TO DESIRED TOP LEVEL NAV ITEMS //
/* Declare full width sub nav items here, then include each variable in the array fullWidthSubNavItems */
var fullWidthSubNavItem1 = document.getElementById("menu-item-19131").querySelector("ul");
var fullWidthSubNavItem2 = document.getElementById("menu-item-18050").querySelector("ul");

var fullWidthSubNavItems = [fullWidthSubNavItem1, fullWidthSubNavItem2];

for(i=0; i < fullWidthSubNavItems.length; i++) {
    fullWidthSubNavItems[i].classList.add("subnav-full-width");
}

// MOBILE
var hamContainer = document.getElementById("ham-container");

var navWrap = document.getElementById("nav-wrap");
var isNavOpen = false;

// open and close First Level nav items on mobile
hamContainer.addEventListener("click", function() {
    if(!isNavOpen) {
        navWrap.classList.add("open-nav-mobile");
        isNavOpen = true;
    } else {
        navWrap.classList.remove("open-nav-mobile");
        isNavOpen = false;
    }
});

// Get all first level nav items with children (subnav)
var menuItemHasChildren = document.getElementsByClassName("menu-item-has-children");

// Add down arrows to all first level nav items with children (subnav) -- mobile & desktop
for(i=0; i < menuItemHasChildren.length; i++) {
    var arrowDown = document.createElement('img');
    arrowDown.src = 'assets/arrow-down-thin.png';
    arrowDown.classList.add('nav-arrow-down');

    menuItemHasChildren[i].firstChild.appendChild(arrowDown);
}

// Open and close Second Level nav items on mobile
var secondLevelIsOpen = false;

for(i=0; i < menuItemHasChildren.length; i++) {
    menuItemHasChildren[i].addEventListener( "click", function() {

        if(!secondLevelIsOpen) {
            var thisLI = this.querySelector( ".sub-menu" );

            if ( !thisLI.classList.contains( "open-second-level-mobile"  ) ) {
                thisLI.classList.add( "open-second-level-mobile" );
                secondLevelIsOpen = true;
            } else {
                thisLI.classList.remove( "open-second-level-mobile" );
                secondLevelIsOpen = false;
            }
        } else {
            var thisLI = this.querySelector(".sub-menu");

            if ( thisLI.classList.contains( "open-second-level-mobile" ) ) {
                thisLI.classList.remove( "open-second-level-mobile" );
                secondLevelIsOpen = false;
            } else {
                thisLI.classList.add( "open-second-level-mobile" );
                secondLevelIsOpen = true;
            }
        }
    })
}