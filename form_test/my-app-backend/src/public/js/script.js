// $(document).ready(function() {
//   $(window).scroll(function() {
//     if ($(this).scrollTop() > 100) {
//       $("#toTopButton").fadeIn();
//     } else {
//       $("#toTopButton").fadeOut();
//     }
//   });
//   $("#toTopButton").click(function() {
//     $("html, body").animate({ scrollTop: 0 }, 300);
//     return false;
//   });
// });

mybutton = document.getElementById("toTopButton");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
