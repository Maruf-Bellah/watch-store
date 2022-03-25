import React from 'react';
import './info.css';


const Info = ({card}) => {

     const {name, picture} = card;
/*      const random = [card];
     console.log(random); */

     const random = () =>{
          console.log('click me');
     }

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