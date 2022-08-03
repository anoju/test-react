import { Component } from 'react';
import Header from './components/Header';
import Tab from './components/Tab';
import Control from './components/Control';
import ReadContents from './components/ReadContents';
import CreateContent from './components/CreateContent';
import Footer from './components/Footer';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'create',
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
        { title: 'HTML', desc: 'HTML is for information' },
        { title: 'CSS', desc: 'CSS is for information' },
        { title: 'JavaScript', desc: 'JavaScript is for information' },
      ],
    };
  }
  render() {
    let _title;
    let _desc;
    let _contents;
    if (this.state.mode === 'home') {
      _title = this.state.home.title;
      _desc = this.state.home.desc;
      _contents = <ReadContents title={_title} desc={_desc} />;
    } else if (this.state.mode === 'tab') {
      _title = this.state.menu[this.state.menuIdx].title;
      _desc = this.state.menu[this.state.menuIdx].desc;
      _contents = <ReadContents title={_title} desc={_desc} />;
    } else if (this.state.mode === 'create') {
      _contents = (
        <CreateContent
          title="create"
          onSubmit={function (_title, _desc) {
            if (!_title || !_desc) return;
            // this.setState({
            //   menu: [...this.state.menu, { title: _title, desc: _desc }],
            // });
            this.setState({
              menu: this.state.menu.concat({ title: _title, desc: _desc }),
            });
          }.bind(this)}
        />
      );
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
        <Control
          onChangeMode={function (_mode) {
            this.setState({ mode: _mode });
          }.bind(this)}
        />

        {_contents}
        <Footer />
      </div>
    );
  }
}

export default App;
