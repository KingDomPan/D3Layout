var treeData = [{
  "name": "Top Level",
  "parent": "null",
  "value": 10,
  "type": "black",
  "level": "red",
  "icon": "earth.png",
  "children": [{
    "name": "Level 2: A",
    "parent": "Top Level",
    "value": 5,
    "type": "grey",
    "level": "red",
    "icon": "cart.png",
    "children": [{
      "name": "Son of A",
      "parent": "Level 2: A",
      "value": 5,
      "type": "steelblue",
      "icon": "lettern.png",
      "level": "orange"
    }, {
      "name": "Daughter of A",
      "parent": "Level 2: A",
      "value": 18,
      "type": "steelblue",
      "icon": "vlc.png",
      "level": "red"
    }]
  }, {
    "name": "Level 2: B",
    "parent": "Top Level",
    "value": 10,
    "type": "grey",
    "icon": "random.png",
    "level": "green"
  }]
}];

// ************** Generate the tree diagram  *****************
var margin = {
    top: 20,
    right: 120,
    bottom: 20,
    left: 120
  },
  width = 2048 - margin.right - margin.left,
  height = 1024 - margin.top - margin.bottom;

var i = 0;

var tree = d3.layout.tree()
  .size([height, width]);

// 定义对角线生成器
var diagonal = d3.svg.diagonal()
  .projection(function(d) {
    return [d.y, d.x];
  });

// 定义缩放监听器
var zoom = d3.behavior.zoom()
  .scaleExtent([1, 3]).on("zoom", function() {
    d3.select(this).attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
  });

// svg元素下添加g元素
var svg = d3.select("body").append("svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height + margin.top + margin.bottom)
  .call(zoom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

root = treeData[0];

update(root);

function update(source) {

  // 计算数据的结点和连线, 生成d3的布局数据
  var nodes = tree.nodes(root).reverse(),
    links = tree.links(nodes);

  // 默认行为
  nodes.forEach(function(d) {
    d.y = d.depth * 180;
  });

  // 选择g布局下的node元素 <g><node></node></g>
  var node = svg.selectAll("g.node")
    .data(nodes, function(d) {
      return d.id || (d.id = ++i); // 给结点数据添加id属性
    });

  // 开始添加结点, 每个结点被g包围, 因为刚才的选择器是g.node
  var nodeEnter = node.enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) {
      return "translate(" + d.y + "," + d.x + ")"; // 容器的位置就是结点的位置
    }); // 此时宽和高都是0

  nodeEnter.append("image")
    .attr("xlink:href", function(d) {
      return "../font-mfizz/src/svg/apache.svg";
    })
    .attr("x", "-12px") // 因此svg图片大小的关系导致位置和text不协调, 进行当前位置的偏移
    .attr("y", "-12px")
    .attr("width", "24px") // 设置svg图片大小
    .attr("height", "24px")

  nodeEnter.append("text")
    .attr("x", function(d) {
      return d.children || d._children ? -15 : 15; // 叶子结点向右偏移放在结点后
    })
    .attr("dy", ".35em") // 当前字体12px, 偏移12 * 0.35 px
    .attr("text-anchor", function(d) {
      return d.children || d._children ? "end" : "start"; // 文字在偏移点左上角的位置
    })
    .text(function(d) {
      return d.name;
    })
    .style("fill-opacity", 1);

  // 画线
  var link = svg.selectAll("path.link")
    .data(links, function(l) {
      return l.target.id;
    });

  // Enter the links.
  var path = link.enter().insert("path", "g")
    .attr("class", "link")
    .attr("target", function(d) {
      return d.target.id;
    })
    .style("stroke-dasharray", "5,5") // [每一点的大小, 相邻点的间隔]
    .attr("d", diagonal);

  // 实体线条
  var link2 = svg.selectAll("path.link2")
    .data(links, function(l) {
      return l.target.id;
    });

  var path2 = link2.enter().insert("path", "g")
    .attr("d", diagonal)
    .attr("class", "link2")
    .style("stroke", function(d) {
      return d.target.level;
    })
    .call(transition);

  function transition(tpath) {
    tpath.transition()
      .duration(7500)
      .attrTween("stroke-dasharray", tweenDash)
      .each("end", function() {
        d3.select(this).call(transition);
      });
  }

  function tweenDash() {
    var l = this.getTotalLength(),
      i = d3.interpolateString("0," + l, l + "," + l);
    return function(t) {
      return i(t);
    };
  }

}