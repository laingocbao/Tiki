import React from "react";
import { Redirect } from "react-router-dom";
var Constant = require('../tools/constant');

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      redirect: false
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(e) {
    console.log(e.target.value);
    this.setState({ name: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // alert(Constant.ADD_BOOK_URL);
    fetch(Constant.ADD_BOOK_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name
      })
    }).then(response => {
      this.setState({
        redirect: true
      });
    });
  }

  renderRedirect = () => {
    console.log("Redirect");
    if (this.state.redirect) {
      console.log("Redirect");

      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <div class="row" style={{ paddingTop: 20, paddingLeft: 20, verticalAlign: "middle" }}>
          <div class="col-sm-4">
            <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <label for="bookName">Book Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter book name"
                  onChange={this.handleTextChange}
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddBook;
