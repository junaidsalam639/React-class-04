import React , {useState , useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import TextForm from "./TextForm";
import UseEffect from "./UseEffect";
import Todo from "./Todo";
import Count from "./Count";


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
    <h1 className="fw-bold text-center">React-Class-04</h1>
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

