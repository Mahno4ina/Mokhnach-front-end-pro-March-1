document.addEventListener("DOMContentLoaded", function(event) {
  var images = document.querySelectorAll(".slider-image");
  var prevButton = document.getElementById("prevButton");
  var nextButton = document.getElementById("nextButton");
  var currentIndex = 0;

  function showImage(index) {
    if (index >= 0 && index < images.length) {
      images[currentIndex].classList.remove("active");
      currentIndex = index;
      images[currentIndex].classList.add("active");
    }

    if (currentIndex === 0) {
      prevButton.disabled = true;
    } else {
      prevButton.disabled = false;
    }

    if (currentIndex === images.length - 1) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  }

  prevButton.addEventListener("click", function() {
    showImage(currentIndex - 1);
  });

  nextButton.addEventListener("click", function() {
    showImage(currentIndex + 1);
  });

  showImage(currentIndex);
});