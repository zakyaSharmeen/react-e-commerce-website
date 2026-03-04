import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
// import image1 from "../../assets/image1.jpg";
import "./CartCard.css";
import { useDispatch } from "react-redux";
import { RemoveItem } from "../../redux/cartSlice.js";

function CartCard({ name, price, image, id }) {
  let dispatch = useDispatch();
  return (
    <div className="CartCard">
      <div className="left-card">
        <img src={image} alt={name} />
        <div className="name-price">
          <span>{name}</span>
          <span>Rs {price}/-</span>
        </div>
      </div>
      <div className="right-card">
        {/* <button onClick={() => dispatch(RemoveItem(id))}>
          Remove hiii <RiDeleteBin6Line />
        </button> */}
        <button
          onClick={() => {
            console.log(id);
            dispatch(RemoveItem(id));
          }}>
          delete
        </button>
      </div>
    </div>
  );
}

export default CartCard;
