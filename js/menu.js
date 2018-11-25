window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 480 || document.documentElement.scrollTop > 480) {
    document.getElementById("main_menu").style.padding = "5px 30px";
    document.getElementById("slide_menu").style.padding = "5px 35px";
  } else {
    document.getElementById("main_menu").style.padding = "20px 30px";
    document.getElementById("slide_menu").style.padding = "22px 35px";
  }
}