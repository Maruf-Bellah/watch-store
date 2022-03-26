import React from 'react';

const Random = ({random}) => {
     console.log(random);

     return (
          <div>
               <h4>this is random</h4>
               <button onClick={random}>Random Shonkha</button>
          </div>
     );
};

export default Random;