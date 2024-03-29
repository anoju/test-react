import { Component } from 'react';

class Tab extends Component {
  render() {
    // const lists = [];
    // const data = this.props.data;
    // let i = 0;
    // while(i < data.length){
    //   lists.push(<li key={i}><a href={data[i].url}>{data[i].name}</a></li>);
    //   i += 1;
    // }
    return (
      <nav className="tab">
        <ul>
          {
            // lists
          }
          {this.props.data.map((item, index) => (
            <li key={index}>
              <a
                href={'/' + item.title.toLowerCase()}
                className={this.props.active === index ? 'active' : ''}
                onClick={function (e) {
                  this.props.onChangePage(index);
                  e.preventDefault();
                }.bind(this)}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Tab;
