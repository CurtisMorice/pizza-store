import React, {Component} from 'react';
import axios from 'axios';
import Select from '../Select/Select'
import Customer from '../Customer/Customer';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class Checkout extends Component {
    state = {
        toSelect: false,
    }
    checkout = () => {
        const custReducer = this.props.reduxStore.custReducer;
        const cartReducer = this.props.reduxStore.cartReducer;
        const pizzas = [{
                        name: cartReducer.cart.name,
                        cost: cartReducer.cart.cost
                        }];
        const customer = { 
                        name: custReducer.name,
                        street_address: custReducer.street_address,
                        city: custReducer.city,
                        zip: custReducer.zip,
                        };
        const order_total = cartReducer.totalCost;
        const type = cartReducer.type;                
        const body = {pizzas: select, customer: customer, order_total: order_total, type: type};
        axios.post('/api/order', body).then((response) => {
            alert('Thank you for your order!');
            this.setState(() => ({
                toSelect: true,
            }))
        }).catch((error) => {
            console.log(error);
        })
    }       

    render() {
        if(this.state.toSelect === true){
            return <Redirect to='/select' />
        }
        return (
            <div>
                <h1>Step 3: Checkout</h1>
                <div className="customer">
                    <p>{this.props.customer.name}</p>
                    <p>{this.props.customer.street}</p>
                    <p>{this.props.customer.city}{this.props.customer.zip}</p>
                </div>
                <p>{this.props.customer.method}</p>
                <button onClick={this.checkout}>CHECKOUT</button>
            </div>    
        )
    }
}

export default connect(mapReduxStateToProps)(Checkout);