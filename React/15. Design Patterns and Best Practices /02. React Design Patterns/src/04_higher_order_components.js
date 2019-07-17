const withDagobah = PlanetViewComponent =>
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
    return <PlanetViewComponent {...this.state} />;
  }
};

export default withDagobah(PlanetBranch);

const hoc = withPlanet('tatooine');
const Tatooine = hoc(PlanetView);

// somewhere else inside a component:
render() {
  return (
    <div>
      <Tatooine />
    </div>
  );
}