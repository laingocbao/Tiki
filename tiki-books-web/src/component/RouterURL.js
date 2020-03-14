import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    Switch
} from 'react-router-dom';
import ListBookTiki from './ListBookTiki'
import ListBookTikiProduct from './ListBookTikiProduct'
import NavBar from './Navbar'
import AddBook from './AddBook'
import DeleteBook from './DeleteBook'
import UpdateBook from './UpdateBook'

class RouterURL extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component = {ListBookTiki} />
                    <Route exact path="/listBookTikiProduct/:id" component = {ListBookTikiProduct} />
                    <Route exact path="/addBook" component = {AddBook} />
                    <Route exact path="/deleteBook/:id/:name" component = {DeleteBook} />
                    <Route exact path="/updateBook/:id/:name" component = {UpdateBook} />
                </Switch>
            </div>
        )
    }
}

export default RouterURL;