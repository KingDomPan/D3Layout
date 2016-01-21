function MakePlace(x, y, text) {
  return new joint.shapes.pn.Place({
    position: {
      x: x,
      y: y
    },
    attrs: {
      '.label': {
        text: text,
        fill: '#7c68fc'
      },
      '.root': {
        stroke: '#9586fd',
        'stroke-width': 3
      },
      '.tokens > circle': {
        fill: '#7a7e9b'
      },
      'tspan': {
        dy: "3em",
        "text-anchor": 'middle'
      }
    }
  });
}

function MakeLink(source, target) {
  return new joint.shapes.pn.Link({
    source: {
      id: source.id,
      selector: '.root'
    },
    target: {
      id: target.id,
      selector: '.root'
    },
    attrs: {
      '.connection': {
        'fill': 'none',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        'stroke': '#4b4a67'
      }
    }
  });
}

function fireTransition(t, sec) {

  var self = this;

  var inbound = this.model.getConnectedLinks(t, {
    inbound: true
  });
  var outbound = this.model.getConnectedLinks(t, {
    outbound: true
  });

  var placesBefore = _.map(inbound, function(link) {
    return self.model.getCell(link.get('source').id);
  });
  var placesAfter = _.map(outbound, function(link) {
    return self.model.getCell(link.get('target').id);
  });

  _.each(placesBefore, function(p) {
    var link = _.find(inbound, function(l) {
      return l.get('source').id === p.id;
    });
    self.findViewByModel(link).sendToken(V('circle', {
      r: 5,
      fill: '#feb662'
    }).node, sec * 1000);
  });

  _.each(placesAfter, function(p) {
    var link = _.find(outbound, function(l) {
      return l.get('target').id === p.id;
    });
    self.findViewByModel(link).sendToken(V('circle', {
      r: 5,
      fill: '#feb662'
    }).node, sec * 1000);
  });
}

(function() {
  var paddingLeft = 100;
  var paddingTop = 0;
  var separation = 0

  var graph = new joint.dia.Graph();
  var paper = new joint.dia.Paper({
    el: $('#paper'),
    width: 800,
    height: 150,
    gridSize: 10,
    perpendicularLinks: true,
    model: graph
  });

  var stateArray = _.map(['初始化', '创建', '服务', '部署', '结束'], function(name, index) {
    var num = index + 1;
    return MakePlace(paddingLeft * num + separation, paddingTop + 50, name);
  });

  graph.addCell(stateArray);

  graph.addCell([
    MakeLink(stateArray[0], stateArray[1]),
    MakeLink(stateArray[1], stateArray[2]),
    MakeLink(stateArray[2], stateArray[3]),
    MakeLink(stateArray[3], stateArray[4])
  ]);

  function simulate() {
    var transitions = stateArray;
    _.each(transitions, function(t) {
      fireTransition.call(paper, t, 1);
    });

    return setInterval(function() {
      _.each(transitions, function(t) {
        fireTransition.call(paper, t, 1);
      });
    }, 2000);
  }

  function stopSimulation(simulationId) {
    clearInterval(simulationId);
  }

  var simulationId = simulate();


})();


(function() {
  var graph = new joint.dia.Graph();
  var paper = new joint.dia.Paper({
    el: $('#paper2'),
    width: 800,
    height: 350,
    gridSize: 10,
    perpendicularLinks: true,
    model: graph
  });

  var pn = joint.shapes.pn;

  var pReady = new pn.Place({
    position: {
      x: 140,
      y: 50
    },
    attrs: {
      '.label': {
        text: 'ready',
        fill: '#7c68fc'
      },
      '.root': {
        stroke: '#9586fd',
        'stroke-width': 3
      },
      '.tokens > circle': {
        fill: '#7a7e9b'
      },
      'tspan': {
        dy: '3em'
      }
    }
  });

  var pIdle = pReady.clone().attr({
    '.label': {
      text: 'idle'
    }
  }).position(140, 260);

  var buffer = pReady.clone().attr({
    '.label': {
      text: 'buffer'
    },
    '.alot > text': {
      fill: '#fe854c',
      'font-family': 'Courier New',
      'font-size': 20,
      'font-weight': 'bold',
      'ref-x': 0.5,
      'ref-y': 0.5,
      'y-alignment': -0.5
    }
  }).position(350, 160);

  var cAccepted = pReady.clone().attr({
    '.label': {
      text: 'accepted'
    }
  }).position(550, 50);

  var cReady = pReady.clone().attr({
    '.label': {
      text: 'accepted'
    }
  }).position(560, 260);


  var pProduce = new pn.Place({
    position: {
      x: 50,
      y: 160
    },
    attrs: {
      '.label': {
        text: 'produce',
        fill: '#7c68fc'
      },
      '.root': {
        stroke: '#9586fd',
        'stroke-width': 3
      },
      '.tokens > circle': {
        fill: '#7a7e9b'
      },
      'tspan': {
        dy: '3em'
      }
    }
  });

  var pSend = pProduce.clone().attr({
    '.label': {
      text: 'send'
    }
  }).position(240, 160);

  var cAccept = pProduce.clone().attr({
    '.label': {
      text: 'accept'
    }
  }).position(470, 160);

  var cConsume = pProduce.clone().attr({
    '.label': {
      text: 'consume'
    }
  }).position(660, 160);


  function link(a, b) {

    return new pn.Link({
      source: {
        id: a.id,
        selector: '.root'
      },
      target: {
        id: b.id,
        selector: '.root'
      },
      attrs: {
        '.connection': {
          'fill': 'none',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
          'stroke': '#4b4a67'
        }
      }
    });
  }

  graph.addCell([pReady, pIdle, buffer, cAccepted, cReady, pProduce, pSend, cAccept, cConsume]);

  graph.addCell([
    link(pProduce, pReady),
    link(pReady, pSend),
    link(pIdle, pSend),
    link(pProduce, pIdle),
    link(pSend, buffer),
    link(buffer, cAccept),
    link(cAccept, cAccepted),
    link(cAccepted, cConsume),
    link(cReady, cConsume),
    link(cAccept, cReady)
  ]);


  function fireTransition(t, sec) {

    var inbound = graph.getConnectedLinks(t, {
      inbound: true
    });
    var outbound = graph.getConnectedLinks(t, {
      outbound: true
    });

    var placesBefore = _.map(inbound, function(link) {
      return graph.getCell(link.get('source').id);
    });
    var placesAfter = _.map(outbound, function(link) {
      return graph.getCell(link.get('target').id);
    });

    _.each(placesBefore, function(p) {
      var link = _.find(inbound, function(l) {
        return l.get('source').id === p.id;
      });
      paper.findViewByModel(link).sendToken(V('circle', {
        r: 5,
        fill: '#feb662'
      }).node, sec * 1000);
    });

    _.each(placesAfter, function(p) {
      var link = _.find(outbound, function(l) {
        return l.get('target').id === p.id;
      });
      paper.findViewByModel(link).sendToken(V('circle', {
        r: 5,
        fill: '#feb662'
      }).node, sec * 1000);
    });
  }

  function simulate() {
    var transitions = [pProduce, pSend, cAccept, cConsume];
    _.each(transitions, function(t) {
      fireTransition(t, 1);
    });

    return setInterval(function() {
      _.each(transitions, function(t) {
        fireTransition(t, 1);
      });
    }, 2000);
  }

  function stopSimulation(simulationId) {
    clearInterval(simulationId);
  }

  var simulationId = simulate();
})();