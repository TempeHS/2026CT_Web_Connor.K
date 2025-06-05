// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  checkscrolly();
};

function checkscrolly() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  document.getElementById("scrollPercent").textContent =
    "Progress: " + Math.round(scrolled) + "%";
  //"Progress: " + scrolled + "%";
}
