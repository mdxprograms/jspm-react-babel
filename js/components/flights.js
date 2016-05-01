import React from 'react';
import Flight from './flight';

const endpoint = '/js/data/flight_data.json';

export default class Flights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    let getFlights = function(url) {
      return fetch(url).then(response => response.json())
    };
    getFlights(endpoint).then((data) => {
      this.setState({data});
    });
  }

  render() {
    let flights = this.state.data.map((flight, i) =>
      <li key={i}><Flight raw={flight} /></li>
    );
    return <ul>{flights}</ul>;
  }
}
