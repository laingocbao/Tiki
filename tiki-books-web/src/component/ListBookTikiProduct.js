import React from 'react'
import utility from '../tools/utility'

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
            return ({ url: `${utility.BASE_URL}/booksProduct` });
        }
        else {
            return ({ url: `${utility.BASE_URL}/booksProductById?id=${props.match.params.id}` });
        }
    }

    componentDidMount() {
        fetch(this.state.url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                // this.setState({ data })
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