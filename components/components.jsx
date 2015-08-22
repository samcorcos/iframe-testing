if (Meteor.isClient) {
  Tracker.autorun(function onRouteChange (c) {
    var currentRoute = window.location.pathname
    if (currentRoute === "/admin") {
      renderHouston();
    }
  })

  function renderHouston() {
    $(document).ready(function() {
      React.render(
        <HoustonBody />,
        document.getElementsByTagName('body')[0]
      )
    })
  }
}

HoustonBody = React.createClass({
  componentDidMount() {
    let doc = this.getDOMNode().contentDocument
    doc.write(<HoustonSidebar />)
  },
  render() {
    return (
      <iframe id="houston-iframe"></iframe>
    )
  }
})

HoustonSidebar = React.createClass({
  render() {
    return (
      <h1>test</h1>
    )
  }
})
//
// componentDidMount: function() {
//     var doc = this.getDOMNode().contentDocument,
//         children = React.renderComponentToString(this.props.children);
//
//     doc.open();
//     doc.write(children);
//     doc.close();
