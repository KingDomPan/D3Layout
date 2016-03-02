var diameter = 960;

var tree = d3.layout.tree()
  .size([360, diameter / 2 - 120])
  .separation(function(a, b) {
    return (a.parent == b.parent ? 1 : 2) / a.depth;
  });

var diagonal = d3.svg.diagonal.radial()
  .projection(function(d) {
    return [d.y, d.x / 180 * Math.PI];
  });

// var dragListener = d3.behavior.drag().origin(function() {
//     var t = d3.transform(svg.attr('transform'));
//     console.log(t);
//     return {
//       x: t.translate[0],
//       y: t.translate[1]
//     };
//   })
//   .on('drag', function() {
//     var x = d3.event.x;
//     var y = d3.event.y;
//     svg.attr('transform', 'translate(' + x + ',' + y + ')');
//   });

var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on('zoom', function() {
  // 加上原来的偏移量, 才不会有卡顿的操作
  var array = [d3.event.translate[0] + diameter / 2, d3.event.translate[1] + diameter / 2];
  svg.attr('transform', 'translate(' + array + ')scale(' + d3.event.scale + ')');
});

var svg = d3.select('body').append('svg')
  .attr('width', diameter)
  .attr('height', diameter - 150)
  // .call(dragListener)
  .call(zoomListener)
  .append('g')
  .attr('transform', 'translate(' + diameter / 2 + ',' + diameter / 2 + ')');

d3.json('data.json', function(error, root) {
  if (error) throw error;

  var nodes = tree.nodes(root),
    links = tree.links(nodes);

  var link = svg.selectAll('.link')
    .data(links)
    .enter().append('path')
    .attr('class', 'link')
    .attr('d', diagonal);

  var node = svg.selectAll('.node')
    .data(nodes)
    .enter().append('g')
    .attr('class', 'node')
    .attr('transform', function(d) {
      return 'rotate(' + (d.x - 90) + ')translate(' + d.y + ')';
    });

  node.append('circle')
    .attr('r', 7);

  node.append('text')
    .attr('dy', '.31em')
    .attr('text-anchor', function(d) {
      return d.x < 180 ? 'start' : 'end';
    })
    .attr('transform', function(d) {
      return d.x < 180 ? 'translate(8)' : 'rotate(180)translate(-8)';
    })
    .text(function(d) {
      return d.name;
    });
});