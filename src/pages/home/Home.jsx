import React, { useState } from "react";
import bg from "../../assets/bg0.gif";
import "./Home.css";
import { category } from "../../category.js";
import Product from "../../components/product/Product.jsx";
import { dummydata } from "../../dummydata.js";
function Home() {
  let [cate, setCate] = useState(dummydata);

  function filterProduct(category) {
    const updatedata = dummydata.filter((item) => item.category === category);
    setCate(updatedata);
  }
  return (
    <>
      {/* <Nav /> */}
      <div className="home">
        <div className="hero-bg">
          <img src={bg} alt="Home" />
        </div>

        <div className="category-section">
          {category.slice(0, 5).map((item) => (
            <div
              className="category-card"
              key={item.id}
              onClick={() => filterProduct(item.name)}>
              <img src={item.image} alt={item.name} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <h1>Trending Products</h1>
        <div className="product-section">
          {cate.map((item) => (
            <Product
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
