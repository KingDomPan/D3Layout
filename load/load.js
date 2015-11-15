if (window.addEventListener) {
  var range = document.querySelector("#range"),
    circle = document.querySelectorAll("circle")[1];
  if (range && circle) {
    range.addEventListener("change", function() {
      var percent = this.value / 100,
        perimeter = Math.PI * 2 * 10;
      circle.setAttribute('stroke-dasharray', perimeter * percent + " " + perimeter * (1 - percent));
    });
  }
}