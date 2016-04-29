import React from 'react';

export default class Flight extends React.Component {
  render() {
    return(
      <div>
        <p>{this.props.raw.CARRIER}</p>
      </div>
    );
  }
}

