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

React.render(
  <Loading />,
  document.getElementById('example')
);