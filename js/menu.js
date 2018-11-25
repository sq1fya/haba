window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("main_menu").style.padding = "5px 30px";
    document.getElementById("slide_menu").style.padding = "5px 30px";
  } else {
    document.getElementById("main_menu").style.padding = "20px 30px";
    document.getElementById("slide_menu").style.padding = "22px 35px";
  }
}