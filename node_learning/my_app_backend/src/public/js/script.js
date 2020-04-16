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

// doughnut chart
// Doughnut Chart
$(document).ready(function() {
  var options = {
    responsive: false
  };
  new Chart($("#canvas1"), {
    type: "doughnut",
    tooltipFillColor: "rgba(51, 51, 51, 0.55)",
    data: {
      labels: [
        "Figma",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Lightroom"
      ],
      datasets: [
        {
          data: [15, 20, 30, 10],
          backgroundColor: ["#3498DB", "#9B59B6", "#E74C3C", "#26B99A"],
          hoverBackgroundColor: ["#49A9EA", "#B370CF", "#E95E4F", "#36CAAB"]
        }
      ]
    },
    options: { responsive: false }
  });
});
// Doughnut Chart

// slick slider
$(document).ready(function() {
  $(".slider").slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    variableWidth: true,
    centerMode: true
  });
});

// animation
AOS.init();

// move fish
jQuery(function($) {
  $("#yasemin").mouseover(function() {
    //var dWidth = $(document).width() - 100, // 100 = image width
    //dHeight = $(document).height() - 100, // 100 = image height
    var nextX = Math.floor(
        Math.random() *
          ($(this)
            .parent()
            .width() -
            $(this).width() -
            1) +
          1
      ),
      nextY = Math.floor(
        Math.random() *
          ($(this)
            .parent()
            .height() -
            $(this).height() -
            1) +
          1
      );
    $(this).animate({ left: nextX + "px", top: nextY + "px" });
  });
});
jQuery(function($) {
  $("#yasemin1").mouseover(function() {
    //var dWidth = $(document).width() - 100, // 100 = image width
    //dHeight = $(document).height() - 100, // 100 = image height
    var nextX = Math.floor(
        Math.random() *
          ($(this)
            .parent()
            .width() -
            $(this).width() -
            1) +
          1
      ),
      nextY = Math.floor(
        Math.random() *
          ($(this)
            .parent()
            .height() -
            $(this).height() -
            1) +
          1
      );
    $(this).animate({ left: nextX + "px", top: nextY + "px" });
  });
});
jQuery(function($) {
  $("#yasemin2").mouseover(function() {
    //var dWidth = $(document).width() - 100, // 100 = image width
    //dHeight = $(document).height() - 100, // 100 = image height
    var nextX = Math.floor(
        Math.random() *
          ($(this)
            .parent()
            .width() -
            $(this).width() -
            1) +
          1
      ),
      nextY = Math.floor(
        Math.random() *
          ($(this)
            .parent()
            .height() -
            $(this).height() -
            1) +
          1
      );
    $(this).animate({ left: nextX + "px", top: nextY + "px" });
  });
});
jQuery(function($) {
  $("#yasemin3").mouseover(function() {
    //var dWidth = $(document).width() - 100, // 100 = image width
    //dHeight = $(document).height() - 100, // 100 = image height
    var nextX = Math.floor(
        Math.random() *
          ($(this)
            .parent()
            .width() -
            $(this).width() -
            1) +
          1
      ),
      nextY = Math.floor(
        Math.random() *
          ($(this)
            .parent()
            .height() -
            $(this).height() -
            1) +
          1
      );
    $(this).animate({ left: nextX + "px", top: nextY + "px" });
  });
});
jQuery(function($) {
  $("#yasemin4").mouseover(function() {
    //var dWidth = $(document).width() - 100, // 100 = image width
    //dHeight = $(document).height() - 100, // 100 = image height
    var nextX = Math.floor(
        Math.random() *
          ($(this)
            .parent()
            .width() -
            $(this).width() -
            1) +
          1
      ),
      nextY = Math.floor(
        Math.random() *
          ($(this)
            .parent()
            .height() -
            $(this).height() -
            1) +
          1
      );
    $(this).animate({ left: nextX + "px", top: nextY + "px" });
  });
});
jQuery(function($) {
  $("#yasemin5").mouseover(function() {
    //var dWidth = $(document).width() - 100, // 100 = image width
    //dHeight = $(document).height() - 100, // 100 = image height
    var nextX = Math.floor(
        Math.random() *
          ($(this)
            .parent()
            .width() -
            $(this).width() -
            1) +
          1
      ),
      nextY = Math.floor(
        Math.random() *
          ($(this)
            .parent()
            .height() -
            $(this).height() -
            1) +
          1
      );
    $(this).animate({ left: nextX + "px", top: nextY + "px" });
  });
});
jQuery(function($) {
  $("#yasemin6").mouseover(function() {
    //var dWidth = $(document).width() - 100, // 100 = image width
    //dHeight = $(document).height() - 100, // 100 = image height
    var nextX = Math.floor(
        Math.random() *
          ($(this)
            .parent()
            .width() -
            $(this).width() -
            1) +
          1
      ),
      nextY = Math.floor(
        Math.random() *
          ($(this)
            .parent()
            .height() -
            $(this).height() -
            1) +
          1
      );
    $(this).animate({ left: nextX + "px", top: nextY + "px" });
  });
});
jQuery(function($) {
  $("#yasemin7").mouseover(function() {
    //var dWidth = $(document).width() - 100, // 100 = image width
    //dHeight = $(document).height() - 100, // 100 = image height
    var nextX = Math.floor(
        Math.random() *
          ($(this)
            .parent()
            .width() -
            $(this).width() -
            1) +
          1
      ),
      nextY = Math.floor(
        Math.random() *
          ($(this)
            .parent()
            .height() -
            $(this).height() -
            1) +
          1
      );
    $(this).animate({ left: nextX + "px", top: nextY + "px" });
  });
});
// phone screens
document.getElementById("myBtn").onclick = function() {
  myFunction();
};
function myFunction() {
  document.getElementsByClassName("dropdown").classList.toggle("show");
}
