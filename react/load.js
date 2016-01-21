var Loading = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },

  componentDidMount() {
    var thiz = React.findDOMNode(this);
    var pw = getComputedStyle(thiz.parentNode, null).width;
    var ph = getComputedStyle(thiz.parentNode, null).height;
    thiz.style.width = pw;
    thiz.style.height = ph;
  },

  render: function() {
    return (
      <div style={{position: 'absolute'}}>
        <div className="sk-three-bounce-loading">
          <div className="sk-three-bounce-wrap">
            <div className="sk-three-bounce">
              <div className="sk-child sk-bounce1"></div>
              <div className="sk-child sk-bounce2"></div>
              <div className="sk-child sk-bounce3"></div>
              <div className="sk-child sk-bounce4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var OK = React.createClass({

  getDefaultProps: function() {
    console.log('OK----getDefaultProps');
    return {
      name: 'panqd'
    };
  },

  getInitialState: function() {
    console.log('OK----getInitialState');
    return {
      show: true
    };
  },

  componentWillMount: function() {
    console.log('OK----componentWillMount');
  },

  componentDidMount() {
    console.log('OK----componentDidMount');
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    console.log('OK----shouldComponentUpdate');
    return true;
  },

  componentWillReceiveProps: function(nextProps) {
    console.log('OK----componentWillReceiveProps');
  },

  componentWillUpdate: function(nextProps, nextState) {
    console.log('OK----componentWillUpdate');
  },

  componentDidUpdate: function(prevProps, prevState) {
    console.log('OK----componentDidUpdate');
  },

  componentWillUnmount: function() {
    console.log('OK----componentWillUnmount');
  },

  render: function() {
    console.log('OK----render');
    return (
      <div>{this.props.name}</div>
    );
  }
});

var OK2 = React.createClass({

  getDefaultProps: function() {
    console.log('KingDomPan----getDefaultProps');
    return {
      name: 'panqd'
    };
  },

  getInitialState: function() {
    console.log('KingDomPan----getInitialState');
    return {
      show: true
    };
  },

  componentWillMount: function() {
    console.log('KingDomPan----componentWillMount');
  },

  componentDidMount() {
    console.log('KingDomPan----componentDidMount');
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    console.log('KingDomPan----shouldComponentUpdate');
    return true;
  },

  componentWillReceiveProps: function(nextProps) {
    console.log('KingDomPan----componentWillReceiveProps');
  },

  componentWillUpdate: function(nextProps, nextState) {
    console.log('KingDomPan----componentWillUpdate');
  },

  componentDidUpdate: function(prevProps, prevState) {
    console.log('KingDomPan----componentDidUpdate');
  },

  componentWillUnmount: function() {
    console.log('KingDomPan----componentWillUnmount');
  },

  render: function() {
    console.log('KingDomPan----render');
    return (
      <div>{this.props.name}</div>
    );
  }
});


var Input = React.createClass({

  getDefaultProps: function() {
    console.log('getDefaultProps');
    return {

    };
  },

  getInitialState: function() {
    console.log('getInitialState');
    return {
      show: true
    };
  },

  componentWillMount: function() {
    console.log('componentWillMount');
  },

  componentDidMount() {
    console.log('componentDidMount');
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  },

  componentWillReceiveProps: function(nextProps) {
    console.log('componentWillReceiveProps');
  },

  componentWillUpdate: function(nextProps, nextState) {
    console.log('componentWillUpdate');
  },

  componentDidUpdate: function(prevProps, prevState) {
    console.log('componentDidUpdate');
  },

  componentWillUnmount: function() {
    console.log('componentWillUnmount');
  },

  _onClick() {
    this.setState({
      show: !this.state.show
    });
  },

  render: function() {
    console.log('render');
    return (
      <div>
        <input style={{display: this.state.show ? '' : 'none'}} />
          <OK name={this.state.show}/>
          <OK2 />
        <button onClick={this._onClick}>DDDD</button>
      </div>
    );
  }
});

React.render(
  <Input />,
  document.getElementById('example')
);
