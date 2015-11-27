var Test = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },
  componentDidMount: function() {
    var s = document.createElement('script');
    s.type='text/javascript';
    s.src = 'app.js';
    document.body.appendChild(s);
  },

  handleClick: function() {

  },

  render: function() {
    var emberHtml = '<script type="text/x-handlebars" data-template-name="application">' +
      '<div>' +
        '{{view App.ChromeDevToolsTimetreeView contentBinding="App.ApiData" classNames="time-tree" rowHeight=12}}' +
      '</div>' +
    '</script>';
    return (
      <div dangerouslySetInnerHTML={{__html: emberHtml}}></div>
    );
  }
});

React.render(
  <Test />,
  document.getElementById('example')
);