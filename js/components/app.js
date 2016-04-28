import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Header from './header';
import Flights from './flights';

// Your wrapper for everything - attach it to the body , or the container.
// Import your main sections into here
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  // componentDidMount() {
  //   flights(this.props.user).then((repos) => {
  //     this.setState({ repos });
  //   });
  // }

  render() {
    return (
      <div>

        <Header />

        <Flights url="/js/data/flight_data.json" />

      </div>
    )
  }
}
