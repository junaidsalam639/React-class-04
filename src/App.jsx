import React , {useState , useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import TextForm from "./Component/TextForm";
import UseEffect from "./Component/UseEffect";
import Todo from "./Component/Todo";
import Count from "./Component/Count";
import  Navbar  from "./Component/Navbar";
import Weather from "./Component/Weather";

function App() {
  let [news, setNews] = useState([]);
  
  useEffect(() => {
  fetch('https://dummyjson.com/products')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      setNews(data.products);
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
  }, []);
  
  return (
    <>
    <div className="sticky-top">
    <Navbar/>
    </div>
    <h1 className="fw-bold text-center my-4">React-Class-04</h1>
    <Weather/>
    <Todo/>
    <Count/>
      <div className="container my-2">
      <TextForm/>
      </div>
    <div className="App">
      {/* News Cards */}
      {news.map((item) => (
        <div className="news-card">
          <img src={item.thumbnail} alt="" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          {/* Add other fields you want to display */}

        </div>
      ))}
    </div>
          </>
  );
}

export default App;

