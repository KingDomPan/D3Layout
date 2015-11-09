var m = [20, 20, 20, 20],
  w = 800 - m[1] - m[3],
  h = 800 - m[0] - m[2];

var tree = d3.layout
  .tree()
  .size([w - 200, h - 200])
  .separation(function(a, b) { // 设置结点间的距离
    return (a.parent == b.parent) ? 1 : 2;
  });

var treeSvg = d3.select('body')
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

// 创建对角线生成器
var diagonal = d3.svg.diagonal()
  .projection(function(d) { // 作用于每个结点, 也就是说其x和y坐标被对调, 这样就制作成一个横向的坐标系
    return [d.x, d.y]; // 默认布局是从上往下, 现在绘制成从左往右
  });

d3.json("city.json", function(error, root) {
  var nodes = tree.nodes(root); // 获取所有的结点信息, depth, parent, x, y
  var links = tree.links(nodes); // 获取结点于结点间的连线信息, 包含source和target字段, 指向node
  // console.log(nodes);
  // console.log(links);

  // 绘制, 结点<circle> 文本<text> 连线<path>, 画成曲线的话用对角线生成器来做

  // 添加连线
  var link = treeSvg.selectAll(".link")
    .data(links)
    .enter()
    .append("path")
    .attr("class", "link")
    .attr("d", diagonal) // 使用对角线生成器生成连线, 每个连线数据里面都包含了连线的起点和重点坐标
    .on("mouseover", function() {
      console.log("线上mouseover事件, 进行信息弹窗");
    })
    .on("mouseout", function() {
      console.log("线上mouseout事件, 消除信息弹窗");
    });
  // 绘制结点, 由于每个结点都是circle和text, 因此添加到g元素里面
  var node = treeSvg.selectAll(".node")
    .data(nodes)
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", function(d) { // 将结点移动到指定的位置上, 与对角线生成器的投影函数保持一致
      return "translate(" + d.x + "," + d.y + ")"; // 把dy.作为x方向平移, dx向y轴平移
    })
    .on("mouseover", function() {
      console.log("结点mouseover事件, 进行信息弹窗");
    })
    .on("mouseout", function() {
      console.log("结点mouseout事件, 消除信息弹窗");
    });

  node.append("circle")
    .attr("r", 4.5);

  // node.append("text")
  //   .attr("dx", function(d) {
  //     return d.children ? -4 : 8;
  //   })
  //   .attr("dy", function(d) {
  //     return d.children ? -8 : 14.5;
  //   })
  //   .style("text-anchor", function(d) {
  //     return d.children ? "middle" : "middle";
  //   })
  //   .text(function(d) {
  //     return d.name;
  //   });

  node.selectAll(".text")
    .data(function(d) {
      return d.name.split("");
    })
    .enter()
    .append("text")
    .attr("dx", function(d, i) {
      return 0;
    })
    .attr("dy", function(d, i) {
      return (i + 1) * 18;
    })
    .style("text-anchor", function(d, i) {
      return "middle";
    })
    .text(function(d, i) {
      return d;
    });
});