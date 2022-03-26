import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import Info from './Info/Info';
import Random from './Info/Random/Random';
import Product from './Product/Product';
import './Watch.css';

const Watch = () => {
     const [watches, setWatches] = useState([]);
     const [cards, setCard] = useState([]);

     

     useEffect(()=>{
          fetch('watches.json')
          .then(res => res.json())
          .then(data => setWatches(data))
     },[])

     
     const addToCard = (watch) =>{
        /*   if(cards.length > 5){
               alert('hey What are your doing')
          }else{
               const newCard = [...cards, watch];
               setCard(newCard);
          }  */
          const newCard = [...cards, watch];
          setCard(newCard);
         
     }
     const random = (watch) =>{
     
          const newCard = [cards, watch];
          setCard(newCard);
      
   

     }
         

 
  
     return (
          <div className="watch">   
              
               <div className="watch-info">
           
               {
               watches.map(watch=> <Product 
                    key={watch.id}
                    watch ={watch}
                    addToCard = {addToCard}
                    ></Product>)
               }
               </div>
               <div className="watch-card">
                  
               <Card></Card>
               
                    <div className='card-info'>{
                         cards.map(card =><Info 
                         key={card.id}
                          card={card}></Info>)
                          
                         }

                                <button onClick={()=> random(watches)} >click me</button>
                    </div>
                  
      
                   
               </div>
        
          </div>
     );
};

export default Watch;