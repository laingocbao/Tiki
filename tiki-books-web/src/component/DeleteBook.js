import React from "react";
import ListBookTiki from "./ListBookTiki";
import { Redirect } from "react-router-dom";

class DeleteBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      name: props.match.params.name,
      redirect: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    // alert("This is alert box!");
    fetch("http://localhost:3600/deleteBook", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.id
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
                <label for="bookID">ID</label>
                <input
                  type="text"
                  class="form-control"
                  id="bookID"
                  disabled="true"
                  value={this.props.match.params.id}
                />
              </div>
              <div class="form-group">
                <label for="bookName">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="bookName"
                  disabled="true"
                  value={this.props.match.params.name}
                />
              </div>
              <button type="submit" class="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteBook;
