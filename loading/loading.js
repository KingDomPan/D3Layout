if (window.addEventListener) {
  var range = document.querySelector("#range"),
    circle = document.querySelectorAll("circle")[1];
  if (range && circle) {
    range.addEventListener("change", function() {
      var percent = this.value / 100; // 百分比
      var perimeter = Math.PI * 2 * 50; // 圆形的周长
      // 虚线的长度 = 百分比值 * 圆的周长
      // 设置(虚线的宽度, 虚线之间的距离) = (周长的百分比, 周长剩余的百分比);
      // 即描边的总百分为周长即可
      circle.setAttribute('stroke-dasharray',
        perimeter * percent + " " + perimeter * (1 - percent));
    });
  }
}

(function() {
  var t = setTimeout(function() {
    var percent = 100 / 100;
    var perimeter = Math.PI * 2 * 50;
    d3.selectAll(".q")
      .transition()
      .duration(2500)
      .attr("stroke-dasharray", perimeter * percent + " " + perimeter * (1 - percent))
      .each("start", function() {
        $("circle").show();
      })
      .each("end", function() {
        $("circle").remove();
      })
  }, 1000);
})();