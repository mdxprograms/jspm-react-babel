import React from 'react';
import ReactDOM from 'react-dom';
import 'fetch';

import Header from './header';
import Flights from './flights';

// Your wrapper for everything - attach it to the body , or the container.
// Import your main sections into here
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Flights />
      </div>
    );
  }
}
