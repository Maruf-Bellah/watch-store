import React from 'react';
import './info.css';


const Info = ({card}) => {

     const {name, picture} = card;
     const {newButton} = card;
     console.log(newButton);
/*      const random = [card];
     console.log(random); */

    
     return (
          <div className='info'>
               <div className="info-card">
                    <div>
                         <img src={picture} alt="" />
                    </div>
                    <div>
                         <p>{name}</p>  
                    </div>
               </div>
            
          </div>

     );
};

export default Info;