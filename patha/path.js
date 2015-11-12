// 线上的分割点
var points = [
  [0, 0],
  [300, 400]

  /**
  [480, 200],
  [580, 400],
  [680, 100],
  [780, 300],
  [180, 300],
  [280, 100],
   */
];

var svg = d3.select("#mysvg").append("svg")
  .attr("width", 960)
  .attr("height", 500);

// 创建一条线
var path = svg.append("path")
  .data([points])
  .attr("d", d3.svg.line());

// 在线上创建圆点
svg.selectAll(".point")
  .data(points)
  .enter().append("circle")
  .attr("r", 4)
  .attr("transform", function(d) {
    return "translate(" + d + ")";
  });

// 创建一个滚动的圆点
var circle = svg.append("circle")
  .attr("r", 13)
  .attr("transform", "translate(" + points[0] + ")");

// 执行动画函数
transition();

function transition() {
  // 圆啊, 你开始滚
  circle.transition()
    .duration(10000)
    .attrTween("transform", translateAlong(path.node()))
    .each("end", transition);
}

// Returns an attrTween for translating along the specified path element.
function translateAlong(path) {
  var l = path.getTotalLength(); // 整个线段长度
  return function(d, i, a) {
    return function(t) {
      var p = path.getPointAtLength(t * l);
      return "translate(" + p.x + "," + p.y + ")";
    };
  };
}

var canvasWidth = 800;
var shapes = [];
var lastXY = 1;
var zoomEnabled = true;
var dragEnabled = true;

var canvas = d3.demo.canvas().width(400).height(400);
d3.select("#canvas").call(canvas);

canvas.addItem(svg);