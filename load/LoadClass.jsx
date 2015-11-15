var LoadClass =  React.createClass({
  render: function() {
    return (
      <svg width="100" height="100">
        <circle cx="50" cy="50" r="25" stroke-width="50" stroke="#D1D3D7" fill="none"></circle>
        <circle cx="50" cy="50" r="25" stroke-width="50" stroke="#00A5E0" fill="none" transform="matrix(0,-1,1,0,0,100)" stroke-dasharray="0 1069"></circle>
        <image xlink:href="../font-mfizz/src/svg/apache.svg" x="0" y="0" width="100" height="100" />
    </svg>
    );
  }
});

React.render(<LoadClass />, document.body);