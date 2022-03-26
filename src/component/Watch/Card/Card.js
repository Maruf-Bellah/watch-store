import React from 'react';

import'./Card.css';

const Card = ({card}) => {
     

     
    
     const {name, picture} = card;

  
     return (
          <div className='card'>
            
               <div className="info-card">
                    <div>
                         <img className='pic' src={picture} alt="" />
                    </div>
                    <div>
                         <p></p>
                         <p>{name}</p>  
                    </div>
               </div>

   
            
          </div>
     );
};

export default Card;