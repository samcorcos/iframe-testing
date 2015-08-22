if (Meteor.isClient) {
  Tracker.autorun(function onRouteChange (c) {
    var currentRoute = window.location.pathname
    if (currentRoute === "/admin") {
      renderHouston();
    }
  })

  function renderHouston() {
    $(document).ready(function() {
      HoustonBody = React.createClass({
        render() {
          return (
            <iframe id="houston-iframe"></iframe>
          )
        }
      })

      React.render(
        <HoustonBody />,
        document.getElementsByTagName('body')[0]
      )
    })
  }
}
