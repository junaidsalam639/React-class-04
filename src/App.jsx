import axios from "axios";
import React , { useState , useEffect } from "react";



function App() {

  let [setNews , getNews ] = useState([]);
  
  let arr = []
  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(function (res){
      return res.json()
    })
    .then(function (data){
      console.log(data.products);
      console.log(data.products[0].title);
      arr.push(data.products)
      console.log(arr);
      getNews(arr)
      console.log(setNews);

    }).catch((e) => {
      console.log(e);
    })
    
  },[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

//  axios('https://newsapi.org/v2/everything?q=tesla&from=2023-07-31&sortBy=publishedAt&apiKey=d82d0b0316db49598b3504da552a9ccc')
//  .then((data) => {
//   console.log(data);
//   arr.push(data.data.articles)
//   console.log(arr);
//   getNews(arr)
//   console.log(setNews);
//  })
//  .catch((error) => {
//   console.log(error);
//  })


//  setNews[0].map((data) => {
//    console.log(data);
 
//     })
    