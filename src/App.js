import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="" />
        <h1>{this.props.title}</h1>
        <sub>{this.props.sub}</sub>
      </header>
    );
  }
}

class Navi extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <sub>&copy;anoju</sub>
      </footer>
    );
  }
}

class App extends Component {
  render(){
    return (
      <div className="app">
        <Header title="ANOJU!!" sub="리액트 연습중"></Header>
        <Navi />
        <main className="main">
          Hello, react!!
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
