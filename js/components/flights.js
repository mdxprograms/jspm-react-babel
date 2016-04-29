import React from 'react';
import Flight from './flight';

export default class Flights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: '/js/data/flight_data.json'
    };
  }

  componentDidMount() {
    var getFlights = function(url) {
      return fetch(url).then(response => response.json())
    };
    getFlights(this.state.url).then((data) => {
      this.setState({data});
    });
  }

  render() {
    var flights = this.state.data.map((flight, i) =>
      <li key={i}><Flight raw={flight} /></li>
    );
    return <ul>{flights}</ul>;
  }
}
