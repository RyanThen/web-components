// ---- VIDEO SECTION ---- //
// Variables
var videoPopup1 = document.getElementById("vid-popup-1");
var videoPopupImg2 = document.getElementById("vid-popup-2");
var videoPopupImg3 = document.getElementById("vid-popup-3");
var videoPopupImg4 = document.getElementById("vid-popup-4");

var videoPopups = document.querySelectorAll(".image-popup-vid");

var videoTitleFirst = document.querySelector(".vid-title-first");
var videoTitles = document.querySelectorAll(".vid-title");
var videoDescriptionsFirst = document.querySelector(".vid-desc-first");
var videoDescriptions = document.querySelectorAll(".vid-desc");
var vpFeaturedText = document.querySelector(".vp-featured-text");

var videoDescriptionsTextArray = [];

// Build above array of full video descriptions (unshortened strings)
for (var i = 0; i < videoDescriptions.length; i++) {
  videoDescriptionsTextArray.push(videoDescriptions[i].textContent);
}

// Functions
var addFeaturedTextAnimation = function () {
  if (vpFeaturedText.classList.contains("fade-in-and-up")) {
    vpFeaturedText.classList.remove("fade-in-and-up");
    vpFeaturedText.classList.add("fade-in-and-up-2");
  } else {
    vpFeaturedText.classList.remove("fade-in-and-up-2");
    vpFeaturedText.classList.add("fade-in-and-up");
  }
};

var setVideoTitleDesc = function (arrayPosition) {
  videoTitleFirst.textContent = videoTitles[arrayPosition].textContent;
  videoDescriptionsFirst.textContent =
    videoDescriptionsTextArray[arrayPosition];
};

var removeVideoActive = function () {
  for (var i = 0; i < videoPopups.length; i++) {
    videoPopups[i].classList.remove("video-active");
  }
};

// Logic and Functionality //
// Set description excerpt and excerpt length
for (var i = 0; i < videoDescriptions.length; i++) {
  videoDescriptions[i].textContent = videoDescriptions[i].textContent.substr(
    0,
    95
  );
  // videoDescriptions[i].textContent = (videoDescriptions[i].textContent).substr(0, 95) + '...';
}

// Set start video value
videoPopup1.src = "https://www.youtube.com/embed/add-embed-code-here";
setVideoTitleDesc(0);

// Videos "on deck"
videoPopupImg2.addEventListener("click", function () {
  videoPopup1.src = "https://www.youtube.com/embed/add-embed-code-here";
  setVideoTitleDesc(0);
  addFeaturedTextAnimation();
  removeVideoActive();
  videoPopupImg2.classList.add("video-active");
});

videoPopupImg3.addEventListener("click", function () {
  videoPopup1.src = "https://www.youtube.com/embed/add-embed-code-here";
  setVideoTitleDesc(1);
  addFeaturedTextAnimation();
  removeVideoActive();
  videoPopupImg3.classList.add("video-active");
});

videoPopupImg4.addEventListener("click", function () {
  videoPopup1.src = "https://www.youtube.com/embed/add-embed-code-here";
  setVideoTitleDesc(2);
  addFeaturedTextAnimation();
  removeVideoActive();
  videoPopupImg4.classList.add("video-active");
});
