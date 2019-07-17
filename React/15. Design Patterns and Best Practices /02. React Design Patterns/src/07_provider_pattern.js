import React from "react";
import PropTypes from "prop-types";

// IMPORTANT: we need to define childContextTypes
// to be able to access the context object in React
const contextTypes = {
  dagobah: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    planet: PropTypes.shape({
      name: PropTypes.string,
      climate: PropTypes.string,
      terrain: PropTypes.string
    })
  })
};

export class DagobahProvider extends React.Component {
  state = { loading: true };

  componentDidMount() {
    fetch("https://swapi.co/api/planets/5")
      .then(res => res.json())
      .then(
        planet => this.setState({ loading: false, planet }),
        error => this.setState({ loading: false, error })
      );
  }

  static childContextTypes = contextTypes;

  getChildContext() {
    return { dagobah: this.state };
  }

  render() {
    return this.props.children;
  }
}

const withDagobah = PlanetViewComponent =>
class extends React.Component {
  static contextTypes = contextTypes;

  render() {
    const { props, context } = this;
    return <PlanetViewComponent {...props} {...context.dagobah} />;
  }
};

const DagobahRp = ({ render }, { dagobah }) => render(dagobah);

DagobahRp.contextTypes = contextTypes;

const DagobahPlanet = withDagobah(View);

class App extends Component {
  render() {
    return (
      <DagobahProvider>
        <DagobahPlanet />
        <DagobahPlanet />
        <DagobahPlanet />
        <DagobahRp render={props => <View {...props} />} />
        <DagobahRp render={props => <View {...props} />} />
        <DagobahRp render={props => <View {...props} />} />
      </DagobahProvider>
    );
  }
}