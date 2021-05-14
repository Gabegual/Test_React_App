import { Navbar } from 'reactstrap';
import Menu from './menuComponets';
 //import './App.css';
import { DISHES } from '../shared/dishes';
import { render } from '@testing-library/react';
import { Component } from 'react';
import Header from './HeaderComponent';
import DishDetail from "./DishdetailComponent";


class Main extends Component {

   constructor(props) {
     super(props);

     this.state = {
       dishes: DISHES,
       selectedDish: null
     };
   }

   onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
}

  render() {
    return (
      <div>
        <Header />
       

<Menu dishes={this.state.dishes} 
    onClick={(dishId) => this.onDishSelect(dishId)}/>
    <DishDetail 
        dish ={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} />
    </div>
  );
}
}
export default Main;
