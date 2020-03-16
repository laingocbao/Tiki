import React from "react";
import { Redirect } from "react-router-dom";
var Constant = require('../tools/constant');

class UpdateBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      name: props.match.params.name,
      redirect: false
    };
  }

  handleTextChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // alert("This is alert box!");
    fetch(Constant.UPDATE_BOOK_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.id,
        name: this.state.name
      })
    }).then(response => {
      this.setState({
        redirect: true
      });
    });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <div
          class="row"
          style={{ paddingTop: 20, paddingLeft: 20, verticalAlign: "middle" }}
        >
          <div class="col-sm-4">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div class="form-group">
                <label for="id">ID</label>
                <input
                  type="text"
                  class="form-control"
                  id="id"
                  name="id"
                  disabled="true"
                  value={this.props.match.params.id}
                  onChange={this.handleTextChange.bind(this)}
                />
              </div>
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleTextChange.bind(this)}
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateBook;
