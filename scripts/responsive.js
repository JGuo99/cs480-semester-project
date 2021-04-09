// Version 2 - Resolution Dependent Layout
function adjustStyle(width) {
  width = parseInt(width);
  if (width <= 767) {
    $("#responsiveLayout").attr("href", "css/mobileLayout.css");
  } else if ((width >= 768) && (width <= 1023)) {
    $("#responsiveLayout").attr("href", "css/tabletLayout.css");
  } else if ((width >= 1024) && (width <= 2559)) {
    $("#responsiveLayout").attr("href", "css/desktopLayout.css");
  } else {
    $("#responsiveLayout").attr("href", "css/wideLayout.css");
  }
}

$(function() {
  adjustStyle($(this).width());
  $(window).resize(function() {
    adjustStyle($(this).width());
  });
});

// Hamburger Interact Color
var hiddenToggle = true;

function hiddenMenuPressed() {
  if (hiddenToggle) {
    $(".hamburgerNav").css("color", "#38ad98");
    $("#hiddenMenu").css("width", "50%");
    hiddenToggle = false;
  } else {
    $(".hamburgerNav").css("color", "#c7c7c7");
    $("#hiddenMenu").css("width", "0");
    hiddenToggle = true;
  }
}

// Version 1
// Smartphone Size
// var smallScreen = window.matchMedia('screen and (max-width: 767px)');
// smallWindow(smallScreen);
// smallScreen.addListener(smallWindow);

// function smallWindow(screenSize) {
//   if (screenSize.matches) {
//     console.log("Detected: Screen Size Less than 767px!");
//     $("#sideNav").css("display", "none");
//     $(".lside-section").css("display", "none");
//   } else {
//     $("#sideNav").css("display", "block");
//     $(".lside-section").css("display", "block");
//   }
// }
