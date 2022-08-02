import { Component } from 'react';
import Header from './components/Header';
import Tab from './components/Tab';
import Contents from './components/Contents';
import Footer from './components/Footer';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'home',
      home: {
        title: 'Home',
        desc: 'Hello, react!!',
      },
      header: {
        title: 'ANOJU!!',
        sub: '리액트 연습중',
      },
      menuIdx: '',
      menu: [
        { title: 'HTML', desc: 'HTML is for information', url: '/html' },
        { title: 'CSS', desc: 'CSS is for information', url: '/css' },
        { title: 'JavaScript', desc: 'JavaScript is for information', url: '/js' },
      ],
    };
  }
  render() {
    let _title;
    let _desc;
    if (this.state.mode === 'home') {
      _title = this.state.home.title;
      _desc = this.state.home.desc;
    } else if (this.state.mode === 'tab') {
      _title = this.state.menu[this.state.menuIdx].title;
      _desc = this.state.menu[this.state.menuIdx].desc;
    }
    return (
      <div className="page">
        <Header
          title={this.state.header.title}
          sub={this.state.header.sub}
          onChangePage={function () {
            this.setState({ mode: 'home', menuIdx: '' });
          }.bind(this)}
        />
        <Tab
          data={this.state.menu}
          active={this.state.menuIdx}
          onChangePage={function (index) {
            this.setState({ mode: 'tab', menuIdx: index });
          }.bind(this)}
        />
        <Contents title={_title} desc={_desc} />
        <Footer />
      </div>
    );
  }
}

export default App;
