var svg = d3.select("#panqd");
var num = 5;
var left = Math.floor(num / 2);
var right = Math.ceil(num / 2);
var timeq = undefined;
var c = svg
  .append('circle')
  .attr({
    cx: 250,
    cy: 250,
    r: 20
  });

var array = [];

c.on('click', function() {

      //
      var thiz = Snap(d3.select(this).node());
      for (var i = 0; i < left; i++) {
        (function(m, x) {
          var clone = x.clone();
          clone.attr({
            'ccx': x.attr('cx'),
            'class': 'clone'
          });
          array.push(Snap.animate(x.attr('cx'), parseInt(x.attr('cx')) + (-20 * m * 2), function(v) {
            clone.attr({
              cx: v
            });
          }, m * 200, mina.liner, function() {
            console.log("finish left " + m);
          }));
        })(i + 1, thiz);
      }

      for (var j = 0; j < right; j++) {
        (function(m, x) {
          var clone = x.clone();
          clone.attr({
            'ccx': x.attr('cx'),
            'class': 'clone'
          });
          array.push(Snap.animate(x.attr('cx'), parseInt(x.attr('cx')) + (20 * m * 2), function(v) {
            clone.attr({
              cx: v
            });
          }, m * 200, mina.liner, function() {
            console.log("finish right " + m);
          }));
        })(j + 1, thiz);
      }
  })
  .on('mouseout', function(e) {
    if (timeq) {
      clearTimeout(timeq);
      timeq = undefined;
    }
    for (var i = 0; i < array.length; i++) {
      if (array[i].status() < 1) {
        array[i].pause();
        var start = array[i].start;
        var end = array[i].end;
        array[i].start = end;
        array[i].end = start;
        array[i].resume();
      } else {
        svg.selectAll('.clone')
          .transition()
          .attr({
            cx: 250
          })
          .duration(1000)
          .each('end', function(){
            d3.select(this).remove();
          });
        array = [];
      }
    };
  });