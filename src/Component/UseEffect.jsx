import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    let [count , setCount] = useState(0);
    let [data , setData] = useState(0);
    
    useEffect(() => {
        console.log('Data console ' + data);
    } , [data]);
    useEffect(() => {
        console.log('Count console ' + count);
    } , [count]);


    const count1 = () => {
        setCount(count + 1)
    }
    const data1 = () => {
        setData(data - 1)
    }

  return (
      <div className='container'>
      <h1>Count : {count}</h1>
      <h1>Data : {data}</h1>
      <button onClick={count1}>Count</button>
      <button onClick={data1}>Data</button>
    </div>
  )
}

export default UseEffect
