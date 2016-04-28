import React from 'react';

export default class Flights extends React.Component {
  constructor(props) {
    super(props);
    this.state.data = [];
    console.log(this.props);
  }

  componentDidMount() {
    this.loadFlightsFromServer();
    console.log(this.state.data);
  }

  loadFlightsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        console.log(data);
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    return (
      <ul>
        <li></li>
      </ul>
    )
  }
}
