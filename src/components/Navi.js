import { Component } from "react";

class Navi extends Component {
  render() {
    // const lists = [];
    // const data = this.props.data;
    // let i = 0;
    // while(i < data.length){
    //   lists.push(<li key={i}><a href={data[i].url}>{data[i].name}</a></li>);
    //   i += 1;
    // }
    return (
      <nav className="nav">
        <ul>
          {
            // lists
          }
          {this.props.data.map((item, index) => (
            <li key={index}>
              <a
                href={item.url}
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

export default Navi;
