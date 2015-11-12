var root = {
  "name": "Text",
  "group": 0,
  "children": [{
    "name": "Text.0",
    "group": 2,
    "note": "",
    "children": [{
        "name": "Text.1",
        "group": 2,
        "children": [{
          "name": "Text.10",
          "group": 2
        }, {
          "name": "Text.12",
          "group": 2,
          "children": [{
            "name": "Text.120",
            "group": 2
          }, {
            "name": "Text.121",
            "group": 2
          }, {
            "name": "Text.129",
            "group": 2
          }]
        }, {
          "name": "Text.14",
          "group": 2
        }, {
          "name": "Text.15",
          "group": 2,
          "children": [{
            "name": "Text.150",
            "group": 2
          }, {
            "name": "Text.151",
            "group": 2
          }, {
            "name": "Text.159",
            "group": 2
          }]
        }, {
          "name": "Text.18",
          "group": 2,
          "children": [{
            "name": "Text.180",
            "group": 2
          }, {
            "name": "Text.181",
            "group": 2
          }, {
            "name": "Text.182",
            "group": 2
          }, {
            "name": "Text.188",
            "group": 2
          }]
        }, {
          "name": "Text.19",
          "group": 2
        }]
      }, {
        "name": "Text.2",
        "group": 2,
        "children": [{
          "name": "Text.20",
          "group": 2
        }, {
          "name": "Text.21",
          "group": 2
        }, {
          "name": "Text.22",
          "group": 2,
          "children": [{
            "name": "Text.220",
            "group": 2
          }, {
            "name": "Text.221",
            "group": 2
          }, {
            "name": "Text.229",
            "group": 2
          }]
        }, {
          "name": "Text.23",
          "group": 2,
          "children": [{
            "name": "Text.230",
            "group": 2
          }, {
            "name": "Text.231",
            "group": 2
          }, {
            "name": "Text.232",
            "group": 2
          }, {
            "name": "Text.239",
            "group": 2
          }]
        }, {
          "name": "Text.24",
          "group": 2
        }, {
          "name": "Text.25",
          "group": 2,
          "children": [{
            "name": "Text.250",
            "group": 2
          }, {
            "name": "Text.251",
            "group": 2
          }, {
            "name": "Text.259",
            "group": 2
          }]
        }, {
          "name": "Text.26",
          "group": 2
        }, {
          "name": "Text.27",
          "group": 2
        }, {
          "name": "Text.28",
          "group": 2,
          "children": [{
            "name": "Text.280",
            "group": 2
          }, {
            "name": "Text.281",
            "group": 2
          }, {
            "name": "Text.282",
            "group": 2
          }, {
            "name": "Text.288",
            "group": 2
          }]
        }, {
          "name": "Text.29",
          "group": 2
        }]
      }, {
        "name": "Text.9",
        "group": 2,
        "children": [{
          "name": "Text.92",
          "group": 2,
          "children": [{
            "name": "Text.920",
            "group": 2
          }, {
            "name": "Text.921",
            "group": 2
          }, {
            "name": "Text.929",
            "group": 2
          }]
        }, {
          "name": "Text.94",
          "group": 2
        }, {
          "name": "Text.95",
          "group": 2,
          "children": [{
            "name": "Text.950",
            "group": 2
          }, {
            "name": "Text.951",
            "group": 2
          }, {
            "name": "Text.959",
            "group": 2
          }]
        }, {
          "name": "Text.96",
          "group": 2
        }, {
          "name": "Text.97",
          "group": 2
        }, {
          "name": "Text.98",
          "group": 2,
          "children": [{
            "name": "Text.980",
            "group": 2
          }, {
            "name": "Text.981",
            "group": 2
          }, {
            "name": "Text.982",
            "group": 2
          }, {
            "name": "Text.988",
            "group": 2
          }]
        }, {
          "name": "Text.99",
          "group": 2
        }]
      } //*/
    ]
  }]
};

var diameter = 650,
  margin = 40,
  width = diameter,
  height = diameter,
  radius = diameter / 2 - 2 * margin;

var fisheye = d3.fisheye.circular()
  .radius(100)
  .distortion(2)

var tree = d3.layout.tree()
  .size([360, radius])
  .separation(function(a, b) {
    return (a.parent == b.parent ? 1 : 2) / a.depth;
  });


var diagonal = d3.svg.diagonal()
  .projection(function(d) {
    return [d.y, d.x];
  });

var svg = d3.select("#graph").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + (radius + margin) + "," + (radius + margin) + ")");

var color = d3.scale.category10();

update(root);

function update(source) {
  var nodes = tree.nodes(source),
    links = tree.links(nodes);

  var edges = svg.selectAll(".link")
    .data(links)
    .enter().append("path")
    .attr("class", "edge")
    .attr("d", diagonal);

  var nodeEnter = svg.selectAll(".node")
    .data(nodes);

  var g = nodeEnter
    .enter().append("g")
    .attr("class", "node");

  var circles = nodeEnter.append("image")
    .attr("xlink:href", function(d) {
      return "../font-mfizz/src/svg/apache.svg";
    })
    .attr("x", function(d) {
      return d.y;
    }) // 因此svg图片大小的关系导致位置和text不协调, 进行当前位置的偏移
    .attr("y", function(d) {
      return d.x;
    })
    .attr("dx", "-12px") // 因此svg图片大小的关系导致位置和text不协调, 进行当前位置的偏移
    .attr("dy", "-12px")
    .attr("width", "24px") // 设置svg图片大小
    .attr("height", "24px");

  svg.on("mousemove", function() {
    fisheye
      .focus(d3.mouse(this));

    circles
      .each(function(d) {
        d.fisheye = fisheye(d);
      })
      .attr("x", function(d) {
        return d.fisheye.y;
      })
      .attr("y", function(d) {
        return d.fisheye.x;
      })
      .attr("r", function(d) {
        return d.fisheye.z * 4.5;
      });

    diagonal.projection(function(d) {
      d.fisheye = fisheye(d);
      return [d.fisheye.y, d.fisheye.x];
    })
    edges.attr("d", diagonal);
  });

}