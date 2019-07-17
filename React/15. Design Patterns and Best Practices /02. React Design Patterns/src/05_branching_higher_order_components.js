const withDagobah = ({
  LoadingViewComponent,
  ErrorViewComponent,
  PlanetViewComponent
}) =>
  class extends React.Component {
    state = { loading: true };

    componentDidMount() {
      fetch("https://swapi.co/api/planets/5")
        .then(res => res.json())
        .then(
          planet => this.setState({ loading: false, planet }),
          error => this.setState({ loading: false, error })
        );
    }

    render() {
      if (this.state.loading) {
        return <LoadingViewComponent />;
      } else if (this.state.planet) {
        return <PlanetViewComponent {...this.state.planet} />;
      } else {
        return <ErrorViewComponent />;
      }
    }
  };

// and the HOC would be called like this:
export default withDagobah({
  LoadingViewComponent: LoadingView,
  ErrorViewComponent: ErrorView,
  PlanetViewComponent: PlanetView
});