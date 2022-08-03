import { Component } from 'react';

class CreateContent extends Component {
  render() {
    return (
      <main className="main">
        <h1>{this.props.title}</h1>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
            // console.log(e.target.title.value, e.target.desc.value);
          }.bind(this)}
        >
          <div className="form">
            <p>
              <input type="text" name="title" placeholder="title" />
            </p>
            <p>
              <textarea name="desc" placeholder="description"></textarea>
            </p>
            <p>
              <button type="submit">생성</button>
            </p>
          </div>
        </form>
      </main>
    );
  }
}

export default CreateContent;
