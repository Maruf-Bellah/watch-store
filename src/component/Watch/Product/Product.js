import React from 'react';
import'./Product.css';

const Product = ({watch, addToCard}) => {
     // console.log(props.watch);
     const {name, picture, price } = watch;

      return (
        <div className="product">
             <img src={picture} alt="" />
             <h3>{name}</h3>
             <h4>Price {price}</h4>
             <button onClick={() => addToCard(watch)}>
                  <p>click me</p>
             </button>
        </div>
          
     );
};

export default Product;