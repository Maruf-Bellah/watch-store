import React, { useEffect, useState } from 'react';

import Card from './Card/Card';

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
        if(cards.length === 4){
               alert('ভাই ৪ টার মধ্য থেকে আগে একটা কিনেন')
          }else{
               const newCard = [...cards, watch];
               setCard(newCard);
          } 
      /*     const newCard = [...cards, watch];
          setCard(newCard); */
         
     }
     const choose = (cards) =>{
          const newCard = [...cards,cards];
         
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
                    <h2>Select Your Watches</h2>
                  {
                    cards.map(card=> <Card 
                         card ={card}
                         choose ={choose}
                        
                    ></Card>)
                  }
               {/*    <div>
                  {
                    btns.map(btn => console.log(btn))
                    }
                  </div> */}
                    

                 
                  <button className='btn-me' onClick={() => choose(cards)} >CHOOSE 1 FOR ME</button> <br></br>

                  <button className='btn-again' onClick={()=> random(watches)} >CHOOSE AGAIN</button>

          
                   
               </div>
        
          </div>
     );
};

export default Watch;