import { Component } from 'react';

class ReadContents extends Component {
  render() {
    return (
      <main className="main">
        <h1>{this.props.title}</h1>
        <p>{this.props.desc}</p>
      </main>
    );
  }
}

export default ReadContents;
