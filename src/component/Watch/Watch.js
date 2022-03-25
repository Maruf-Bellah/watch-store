import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import Info from './Info/Info';
import Random from './Info/Random/Random';
import Product from './Product/Product';
import './Watch.css';

const Watch = () => {
     const [watches, setWatches] = useState([]);
     const [cards, setCard] = useState([]);
     const [randoms, setRandoms] = useState([]);
     // console.log(card);

     useEffect(()=>{
          fetch('watches.json')
          .then(res => res.json())
          .then(data => setWatches(data))
     },[])

     
     const addToCard = (watch) =>{
          if(cards.length > 3){
               alert('hey What are your doing')
          }else{
               const newCard = [...cards, watch];
               setCard(newCard);
          } 
     }

     const random = (watch) =>{
          const newCard = [...randoms, watch];
          setRandoms(newCard);
          console.log(watch);
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
                         cards.map(card => <Info 
                         key={card.id}
                          card={card}></Info>)
                         
                         }
                    </div>
                    <dir>
                         {
                         randoms.map(random => console.log(random))
                         }
                    </dir>
                    <Random key={random.id} 
                     random ={random}
                    ></Random>
                   
               </div>
          </div>
     );
};

export default Watch;