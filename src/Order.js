import React, {Component} from 'react'
import {TableHeaderColumn, BootstrapTable} from 'react-bootstrap-table';


class Order extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            order_data: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/order-data.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        order_data: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const { error, isLoaded, order_data } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <BootstrapTable data={order_data}>
                    <TableHeaderColumn dataField='date' isKey={true}>Date</TableHeaderColumn>
                    <TableHeaderColumn dataField='pair'>Pair</TableHeaderColumn>
                    <TableHeaderColumn dataField='type'>Type</TableHeaderColumn>
                    <TableHeaderColumn dataField='side'>Side</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
                    <TableHeaderColumn dataField='amount'>Amount</TableHeaderColumn>
                    <TableHeaderColumn dataField='fill_orders'>Fill Orders</TableHeaderColumn>
                    <TableHeaderColumn dataField='total'>Total</TableHeaderColumn>
                    <TableHeaderColumn dataField='status'>status</TableHeaderColumn>
                </BootstrapTable>
            );
        }
    }

}

export default Order


