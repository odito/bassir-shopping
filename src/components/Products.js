import React, { Component } from 'react';
import formatCurrency from '../util';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';


export default class Products extends Component {

constructor(){
    super();
    this.state={
        product:null,
    }
}




openModal=(product)=>{
 this.setState({
     product
 })
}

closeModal=()=>{
    this.setState({
        product:null
    })
}


    render(props) {
        const {product}=this.state;
        return (
            <div>
               <Fade bottom cascade >
               <ul className="products">
                    {this.props.products.map((product)=>{
                      return <li key={product._id}>
                           <div className="product">
                               <a href={"#" + product._id} onClick={()=>this.openModal(product)}>
                                   <img src={product.image} alt={product.title} />
                            <p>{product.title}</p>
                               </a>
                           
                           <div className="product-price">
                               <div>
                                   {formatCurrency(product.price)}
                               </div>
                               <button onClick={()=>this.props.addToCart(product)} className="button primary">
                                   Add to Cart
                               </button>
                           </div>

                           </div>
                      </li>
                    })}
                </ul>
               </Fade>

               {product &&(
                   <Modal isOpen={true} onRequestClose={this.closeModal}>
                       
                   <Zoom>
                       <div>
                           <button onClick={this.closeModal} className="close-modal">x</button>
                           Modal
                       </div>

                       <div className="product-details">
                           <img src={product.image} alt={product.title} />
                           <div className="product-details-description">
               <p><strong>{product.title}</strong></p>
               <p>
                   {product.description}
               </p>
               <p>
                   available sizes{product.availableSizes.map(x=>(
                       <span>{" "} <button className="button">{x}</button></span>
                   ))}
               </p>
               <div className="product-price">
                   <div>
                       {formatCurrency(product.price)}
                   </div>
                   <button className="button primary" onClick={()=>{
                       this.props.addToCart(product);
                       this.closeModal();
                   }}>add to cart</button>
               </div>

                           </div>
                       </div>
                   </Zoom>
                   </Modal>
               )}
            </div>
        )
    }
}
