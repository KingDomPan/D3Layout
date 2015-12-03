var svg = Snap("#panqd");
var num = 5;
var left = Math.floor(num / 2);
var right = Math.ceil(num / 2);

var c = svg.paper.circle(250, 250, 20);
c.mouseover(function() {
  for (var i = 0; i < left; i++) {
    var clone = this.clone();
    var self = this;
    (function(m) {
      clone.animate({
        cx: parseInt(self.attr('cx')) + (-20 * m * 2)
      }, m * 200, mina.liner, function() {
        console.log("finish left " + m);
      });
    })(i + 1);
  }

  for (var j = 0; j < right; j++) {
    var clone = this.clone();
    (function(m) {
      clone.animate({
        cx: parseInt(self.attr('cx')) + (20 * m * 2)
      }, m * 200, mina.liner, function() {
        console.log("finish right " + m);
      });
    })(j + 1);
  }
});