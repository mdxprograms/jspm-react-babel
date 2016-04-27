import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav';

class Test extends React.Component {
  helloUser() {
    alert('hello');
  }

  render() {
    return (
      <div>
        <div onClick={this.helloUser}>hello</div>
        <Nav />
      </div>
    )
  }
}

ReactDOM.render(<Test />, document.querySelector('.hello'));
