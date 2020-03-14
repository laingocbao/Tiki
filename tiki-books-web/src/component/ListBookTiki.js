import ListBookTikiProduct from "./ListBookTikiProduct";
import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";

class ListBookTiki extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listBook: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:3600/books")
      .then(response => {
        return response.json();
      })
      .then(data => {
        // this.setState({ data })
        console.log(data);
        let str = data.map((row, index) => {
          return (
            <tr>
              <th
                scope="row"
                style={{ textAlign: "center", verticalAlign: "middle" }}
              >
                {index + 1}
              </th>
              <td>
                {" "}
                <Link to={"/listBookTikiProduct/" + row.ID}>{row.Name}</Link>
              </td>
              <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                <Link to={"/updateBook/" + row.ID + "/" + row.Name}>
                  <svg
                    width="34"
                    height="34"
                    class="octicon octicon-pencil"
                    viewBox="0 0 14 16"
                    version="1.1"
                    aria-hidden="true"
                    fill="blue"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"
                    ></path>
                  </svg>
                </Link>
              </td>
              <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                <Link to={"/deleteBook/" + row.ID + "/" + row.Name}>
                  <svg
                    width="34"
                    height="34"
                    class="octicon octicon-trashcan"
                    viewBox="0 0 12 16"
                    version="1.1"
                    aria-hidden="true"
                    fill="red"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"
                    ></path>
                  </svg>
                </Link>
              </td>
            </tr>
          );
        });
        this.setState({ listBook: str });
      });
  }

  render() {
    return (
      <div
          class="row"
          style={{ paddingTop: 20, paddingLeft: 30, paddingBottom: 20, paddingRight: 30, verticalAlign: "middle" }}
        >
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col" style={{ textAlign: "center" }}>
                STT
              </th>
              <th scope="col">Name</th>
              <th scope="col" style={{ textAlign: "center" }}>Update</th>
              <th scope="col" style={{ textAlign: "center" }}>Delete</th>
            </tr>
          </thead>
          <tbody>{this.state.listBook}</tbody>
        </table>
      </div>
    );
  }
}

export default ListBookTiki;
