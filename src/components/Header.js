import { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="" />
        <h1>
          <a
            href="/"
            onClick={function (e) {
              this.props.onChangePage();
              e.preventDefault();
            }.bind(this)}
          >
            {this.props.title}
          </a>
        </h1>
        <sub>{this.props.sub}</sub>
      </header>
    );
  }
}

export default Header;
