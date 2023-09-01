import React, { useEffect, useState } from 'react'

const Hooks = () => {
    let [count , setCount] = useState(0);
    useEffect(function (){
        setTimeout(() => {
            setCount(count + 1)
        }, 1000);
        console.log('hello world');
        console.log('guiz');
    }, [])
  return (
    <div>
      <h1 style={{fontFamily: 'revert-layer'}}>Count : {count}</h1>
    </div>
  )
}

export default Hooks
