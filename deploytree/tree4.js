/**
 * [Copy From tree3.js Using D3Grid.js Layout description]
 * @type {Array}
 */
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
    "name": "Son of A",
    "parent": "Level 2: A",
    "value": 5,
    "type": "steelblue",
    "icon": "lettern.png",
    "level": "orange"
  }, {
    "name": "Level 2: B",
    "parent": "Top Level",
    "value": 10,
    "type": "grey",
    "icon": "random.png",
    "level": "green",
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
      "level": "red",
      "service": "java"
    }]
  }]
}];

var defaultConfig = liquidFillGaugeDefaultSettings();
defaultConfig.circleColor = "#D4AB6A";
defaultConfig.textColor = "#553300";
defaultConfig.waveTextColor = "#805615";
defaultConfig.waveColor = "#AA7D39";
defaultConfig.circleThickness = 0.1;
defaultConfig.circleFillGap = 0.2;
defaultConfig.textVertPosition = 0.8;
defaultConfig.waveAnimateTime = 2000;
defaultConfig.waveHeight = 0.3;
defaultConfig.waveCount = 1;

var emitter = new EventEmitter2();

(function() {
  "use strict";

  // ************** Generate the tree diagram  *****************
  var baseMargin = 50;

  var margin = {
    top: baseMargin,
    right: baseMargin,
    bottom: baseMargin,
    left: baseMargin
  };

  var baseWidth = 960;
  var baseHeight = 640;

  // Svg画布总的范围
  var realWidth = baseWidth + 2 * baseMargin;
  var realHeight = baseHeight + 2 * baseMargin;

  // 画布有效范围, 其实就是Base*范围
  var width = realWidth - margin.right - margin.left;
  var height = realHeight - margin.top - margin.bottom;

  // 初始化Svg
  var SnapSvg = undefined;
  (function() {
    SnapSvg = Snap(realWidth, realHeight);
    document.body.appendChild(SnapSvg.node);
  })();

  var i = 0;

  var treePercent = 0.6;

  var tree = d3.layout.tree()
    .size([height, width * treePercent]);

  // 定义对角线生成器
  var diagonal = d3.svg.diagonal()
    .projection(function(d) {
      return [d.y, d.x];
    });

  // svg元素下添加g元素
  var svg = d3.select("body").select("svg")
    .attr("width", realWidth)
    .attr("height", realHeight)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var root = treeData[0];

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
        return "../font-mfizz/src/svg/java.svg";
      })
      .attr("x", function(d) {
        return d.children || d._children ? "-40px" : "-10px";
      }) // 因此svg图片大小的关系导致位置和text不协调, 进行当前位置的偏移
      .attr("y", function(d) {
        return d.children || d._children ? "-30px" : "-30px";
      })
      .attr("width", "50px") // 设置svg图片大小
      .attr("height", "50px")
      .attr("class", function(d) {
        return "ImageNodeClass" + d.id + " TreeNodeImage";
      })
      .attr("service", function(d) {
        return d.service;
      });

    nodeEnter.append("text")
      .attr("x", function(d) {
        return d.children || d._children ? -15 : 15; // 叶子结点向右偏移放在结点后
      })
      .attr("dy", "2em") // 当前字体12px, 偏移12 * 0.35 px
      .attr("text-anchor", function(d) {
        return "middle"; // 文字在偏移点左上角的位置
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
      .style("stroke", function(d) {
        return d.target.level;
      })
      .attr("d", diagonal);
  }

  var datarect = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  /***这里是Grid.js的代码***/
  var rectGrid = d3.layout.grid()
    .bands()
    .cols([6])
    .size([width * (1 - treePercent), 100])
    .padding([0, 0]);

  var podG = d3.select("svg").append("g")
    .attr("transform", "translate(" + (width * treePercent + margin.left) + "," + margin.top + ")");

  var rect = podG.selectAll(".rect")
    .data(rectGrid(datarect));

  rect.enter().append("rect")
    .attr("class", "rect")
    .attr("width", 50)
    .attr("height", 50)
    .attr("transform", function(d) {
      return "translate(" + (d.x + 0) + "," + d.y + ")";
    })
    .style("opacity", 1e-6);
  rect.transition()
    .attr("width", 50)
    .attr("height", 50)
    .attr("transform", function(d) {
      return "translate(" + (d.x + 0) + "," + d.y + ")";
    })
    .style("opacity", 1);
  rect.exit().transition()
    .style("opacity", 1e-6)
    .remove();
  /***End***/

})();