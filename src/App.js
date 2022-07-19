import { Component } from 'react';
import Header from './components/Header';
import Navi from './components/Navi';
import Contents from './components/Contents';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'sub',
      home: {
        title: 'Home',
        desc: 'Hello, react!!'
      },
      header: {
        title: 'ANOJU!!',
        sub: '리액트 연습중'
      },
      menu: [
        {id: 1, title:'HTML', desc:'HTML is for information', url:'/html'},
        {id: 2, title:'CSS', desc:'CSS is for information', url:'/css'},
        {id: 3, title:'JavaScript', desc:'JavaScript is for information', url:'/js'},
      ]
    };
  }
  render(){
    let _title;
    let _desc;
    if(this.state.mode === 'home'){
      _title = this.state.home.title;
      _desc = this.state.home.desc;
    } else if(this.state.mode === 'sub') {
      _title = this.state.menu[0].title;
      _desc = this.state.menu[0].desc;
    }
    return (
      <div className="app">
        {/* <Header title={this.state.header.title} sub={this.state.header.sub} /> */}
        <header className="header">
          <h1><a href="/" onClick={function(e){
            this.setState({mode: 'home'});
            e.preventDefault();
          }.bind(this)}>{this.state.header.title}</a></h1>
          <sub>{this.state.header.sub}</sub>
        </header>
        <Navi data={this.state.menu} />
        <Contents title={_title} desc={_desc} />
        <Footer />
      </div>
    );
  }
}

export default App;
