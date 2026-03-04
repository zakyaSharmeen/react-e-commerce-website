import React from "react";
// import image1 from "../../assets/image1.jpg";
import "./Product.css";
import { useDispatch } from "react-redux";
import { AddItem } from "../../redux/cartSlice.js";

function Product({ name, price, image, id }) {
  let dispatch = useDispatch();
  return (
    <div className="product" key={id}>
      <img src={image} alt={name} />
      <div className="product-details">
        <span className="name">{name}</span>
        <span className="price">Rs {price}/-</span>
        <button
          onClick={() =>
            dispatch(
              AddItem({ id: id, name: name, price: price, image: image }),
            )
          }>
          Add +
        </button>
      </div>
    </div>
  );
}

export default Product;
