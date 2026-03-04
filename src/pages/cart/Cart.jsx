import React from "react";
import CartCard from "../../components/cartCard/cartCard.jsx";
import { useSelector } from "react-redux";
import empty from "../../assets/emptycart.png";
import "./Cart.css";

function Cart() {
  let items = useSelector((state) => state);

  return (
    <div className="cart">
      {items.cart.length <= 0 ? (
        <div className="empty-cart">
          <img src={empty} alt="" />
          <h1>Cart is Empty</h1>
        </div>
      ) : (
        <div className="cartCard-sectio">
          {items.cart.map((item, index) => (
            <CartCard
              key={index}
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
            />
          ))}

          <div className="price-section">
            <span>Total Products: {items.cart.length}</span>
            <span>
              Total Price: Rs{" "}
              {items.cart.reduce((total, item) => total + item.price, 0)}/-
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
