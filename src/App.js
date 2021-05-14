import logo from './logo.svg';
import { Navbar } from 'reactstrap';
import Menu from './Components/menuComponets';
import './App.css';
import { DISHES } from './shared/dishes';
import { render } from '@testing-library/react';
import { Component } from 'react';

class App extends Component {

   constructor(props) {
     super(props);

     this.state = {
       dishes: DISHES
     };
   }
  render() {
  return (
    <div className="App">
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Ristorante Con Fusion</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<Menu dishes={this.state.dishes} />

    </div>
  );
}
}
export default App;
