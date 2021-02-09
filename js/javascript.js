var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos < 300 ){
    document.getElementById("scrollIcon").style.display = "block";
  }
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
    if ( currentScrollPos > 300 ){
      document.getElementById("scrollIcon").style.display = "none";
    }
  }
  prevScrollpos = currentScrollPos;
}
function easeIn() {
  $('html,body').animate({
        scrollTop: $(document.getElementById("firstPara")).offset().top},
        2000);
}