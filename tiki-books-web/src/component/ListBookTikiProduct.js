import React from 'react'
import utility from '../tools/utility'
var Constant = require('../tools/constant');

class ListBookTiki extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            listBook: ''
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.match.params.id == 0) {
            return ({ url: Constant.LIST_BOOK_TIKI_AT_DATE_URL  + `?date=${utility.getDate_YYYY_MMM_DD()}`});
        }
        else {
            return ({ url: Constant.LIST_BOOK_TIKI_BY_ID_AT_DATE_URL + `?id=${props.match.params.id}&date=${utility.getDate_YYYY_MMM_DD()}`});
        }
    }

    componentDidMount() {
        fetch(this.state.url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                // this.setState({ data })
                console.log(this.state.url)
                console.log(data)
                let str = data.map((row, index) => {
                    return (
                        <tr>
                            <th scope="row" style={{ textAlign: "center", verticalAlign: "middle" }}>{index + 1}</th>
                            <td style={{ verticalAlign: "middle" }}><a href={row.url} >{row.name} </a></td>
                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>{utility.format(row.price)}đ</td>
                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>{row.percent}%</td>
                            <td style={{ textAlign: "center" }}>
                                <div>
                                    <img src={row.urlImage} />
                                </div>
                            </td>
                        </tr>
                    )
                });
                this.setState({ listBook: str })
            });
    }

    render() {
        return (
                <div class="table-responsive-sm" style={{ paddingTop: 20, paddingLeft: 30, paddingBottom: 20, paddingRight: 30, verticalAlign: "middle" }}>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col" style={{ textAlign: "center" }} width="2%">STT</th>
                                <th scope="col" style={{ textAlign: "center" }} width="30%">Name</th>
                                <th scope="col" style={{ textAlign: "center" }}>Price</th>
                                <th scope="col" style={{ textAlign: "center" }}>Percent</th>
                                <th scope="col" style={{ textAlign: "center" }}>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.listBook}
                        </tbody>
                    </table>
                </div>
                
        )
    }
}

export default ListBookTiki;