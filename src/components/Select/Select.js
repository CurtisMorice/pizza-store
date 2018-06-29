import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {compose} from 'redux';

const styles = {
    card: {
      maxWidth: 300,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  };
  

const mapReduxStoreToProps = (reduxStore) =>({
    reduxStore
})

class Select extends Component {
   
constructor(){
super();
this.state = {
    pizzaArray: []
    }
}
    
displayPizza = () => {   
    axios.get('/api/pizza').then((response) => {
        console.log('response from  displayPizza', {response});
        this.setState({pizzaArray: [...response.data]});
    }).catch((error) => {
        console.log('error in displayPizza', error);
    
    });
   }
  componentDidMount() {

    this.displayPizza();
  }
handleChangeClick = (event) => {
  
  
}

handleOrderClick = (event, pizza) => {
  console.log('in toggleDescription', event);
  console.log(pizza);
}
  render(){
      const {classes} = this.props;
      return(

        <div>
            {this.state.pizzaArray.map((pizza) =>
        <Card key={pizza._id} className={classes.card}>
            
        <CardMedia
          className={classes.media}
          image={pizza.image_path}
          title="Pizza"
        />
        <CardContent >

                <Typography>{pizza.name}</Typography>
                <Typography>{pizza.description}</Typography>
       
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => this.handleOrderClick( pizza)}>
            Order
          </Button>
          <Button size="small" color="primary" onClick={this.handleChangeClick}>
            Change
          </Button>
        </CardActions>
        
      </Card>
      )}
          
           
        </div>

      )
  }
}
export default compose(
    connect(mapReduxStoreToProps),
    withStyles(styles)
)(Select) ;
