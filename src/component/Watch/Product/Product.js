import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import'./Product.css';

const Product = ({watch, addToCard }) => {
     
     // console.log(props.watch);
     const {name, picture, price } = watch;

      return (
        <div className="product">
             <img src={picture} alt="" />
             <div className="product-info">
             <h2>{name}</h2>
             <h3>Price : $ {price}</h3>
             </div>
               <div className="btn">
               <a href='#/'  onClick={() => addToCard(watch)}>
               <p>Add To Card <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
             </a>
               </div>
           
        </div>
          
     );
};

export default Product;