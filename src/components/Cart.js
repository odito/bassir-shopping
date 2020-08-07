import React, { Component } from 'react'
import formatCurrency from '../util';

export default class Cart extends Component {

constructor(props){
    super(props);
    
    this.state={
        name:'',
        email:"",
        adrress:'',
        showCheckout:false
    }
} 


handleInput=(e)=>{

    this.setState({
       [e.target.name]:e.target.value
    })
}

createOrder=(e)=>{
    e.preventDefault();

    const order={
        name:this.state.name,
        email:this.state.email,
        adrress:this.state.adrress,
        cartItems:this.props.cartItems,

    }

    this.props.createOrder(order);
}




    render() {

        const {cartItems}=this.props;
        return (
            <div>
                <div>
              {cartItems.length===0?
               <div className="cart cart-header">
                 cart is empty  
               </div>:
              
              <div className="cart cart-header">
                you have {cartItems.length} in your cart {' '}   
                   
              </div>
             } 

            </div>

<div className="cart">
    <ul className="cart-items">
        {cartItems.map(item=>{
            return(
                <li key={item._id}>
                    <div>
                        <img src={item.image} alt={item.title}/>
                    </div> 

                    <div>
            <div>{item.title}</div>
            <div className="right">
                {formatCurrency(item.price) } x {item.count}
            <button className="button" onClick={()=>this.props.removeFromCart(item)}>
                Remove
                </button>
            </div>
            
                    </div>
                </li>
            )
        })}
    </ul>
</div>


{cartItems.length !==0 &&(
    
    <div>
    <div className="cart">
   <div className="total">
       <div className="">
           total: {" "}
           {formatCurrency(cartItems.reduce((a, c)=> a + c.price * c.count, 0)) }
       </div>

       <button onClick={()=>{this.setState({showCheckout:true})}} className="button primary">procced</button>
   </div>
</div>

{this.state.showCheckout && (
    <div className="cart">
     <form onSubmit={this.createOrder}>
       <ul className="form-container">
           <li>
               <label >email</label>
               <input name="email" type="email" required onChange={this.handleInput} />
           </li>

           <li>
               <label >name</label>
               <input name="name" type="text" required onChange={this.handleInput} />
           </li>

           <li>
               <label >adrress</label>
               <input name="adrress" type="text" required onChange={this.handleInput} />
           </li>
           <li>
               <button type="submit" className="button primary" >Checkout</button>
           </li>
       </ul>
     </form>
    
    
    </div>
)}

</div>

)}



           </div>
       
        )
    }
}
