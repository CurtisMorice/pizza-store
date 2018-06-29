import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

const WrappedLink = () => {
    return (
        <button type='submit' value='NEXT'>
            <Link to='/checkout'>Next</Link>
        </button>
    )
}



class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            street_address: '',
            city: '',
            zip: '',
            method: ''
        }
    }


    handleForm = (event) => {
        const data ={name:this.state.name, street_address:this.state.street_address, city:this.state.city, zip:this.state.zip, method:this.state.method};

        const action = {type: 'ADD_CUST', payload: data};
        this.props.dispatch(action);
    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        }) 
    }


    handleChangeStreet = (event) => {
        // console.log(event); 
        this.setState({
            street_address: event.target.value
        }) 
    }

    handleChangeCity = (event) => {
        // console.log(event); 
        this.setState({
            city: event.target.value   
        }) 
    }

    handleChangeZip = (event) => {
        // console.log(event); 
        this.setState({
            zip: event.target.value          
        }) 
    }


    handleChangeMethod = (event) => {
        this.setState({
            method: event.target.value  
        }) 
    }



    emptyFields = () => {
        this.setState({
            name: '',
            street_address: '',
            city: '',
            zip: ''
        })
        
    }

    render() {
        return (
            <div>
                <h3>Step 2: Customer Information</h3>
                <form onSubmit={this.handleForm}>
                    <div className='left'>
                    <input onChange={this.handleChangeName} type='text' value={this.state.name} autoComplete='name' placeholder='Name'/>
                    <input onChange={this.handleChangeStreet} type='text' value={this.state.street_address} autoComplete='streetAddress' placeholder='Street Address'/>
                    <input onChange={this.handleChangeCity} type='text' value={this.state.city} autoComplete='city' placeholder='City'/>
                    <input onChange={this.handleChangeZip} type='text' value={this.state.zip} autoComplete='zip' placeholder='Zip'/>
                    </div>
                    <div className='right'>
                    <input onChange={this.handleChangeMethod} type='radio' value={this.state.method} name='method' inputid='pickup'/>
                    <label htmlFor='pickup'>Pickup</label>
                    <input onChange={this.handleChangeMethod} type='radio' value={this.state.method} name='method' inputid='delivery'/>
                    <label htmlFor='delivery'>Delivery</label>
                    </div>
                    <WrappedLink />
                </form>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Customer);