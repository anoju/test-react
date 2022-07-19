import { Component } from 'react';
import Header from './components/Header';
import Navi from './components/Navi';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      header: {
        title: 'ANOJU!!',
        sub: '리액트 연습중'
      }
    };
  }
  render(){
    return (
      <div className="app">
        <Header title={this.state.header.title} sub={this.state.header.sub} />
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
