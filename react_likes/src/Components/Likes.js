import React, { useState } from 'react'


function Likes() {
    let [count, setCount] = useState(0)

    const add = () =>{
        setCount(count += 1)
        console.log(count)
        
    }
    const minus = () =>{
        setCount(count += 1)
        console.log(count)
    }
  return (
    <div className="likes">
        <p id='count'>{count}</p><br/>
        <button name='plus' onClick={add}>+</button>
        <button name='minus' onClick={minus}>-</button>


    </div>
  );
}

export default Likes;
