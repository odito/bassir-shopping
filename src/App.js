
// feature-1
import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import Products from './components/Products';




class  App extends React.Component {

  constructor(){
    super();

    this.state={
      products:data.products,
      size:'',
      sort:''
    }
  }






  render(){
    return (
      <div className="grid-container">
       <header>
         <a href="">react shopping cart</a>
        </header>
  
        <main>
         <div className="content">
           <div className="main">
           
            <Products products={this.state.products} />
           </div>

           <div className="sidebar">
             cart items
           </div>
         </div>
        </main>
  
        <footer>
          all right is reserved
        </footer>
      </div>
    );
  }

}

export default App;


// next 5

// https://docs.google.com/spreadsheets/d/1c5S0dTQHLjQPC0TZT7ZVR6l0JwV52DpjXmP-q4KNCS8/edit#gid=0