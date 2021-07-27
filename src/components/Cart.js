import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../App";

const Cart = () => {
  const context = useContext(BooksContext);

  return (
    <div>
      <h2>
        <Link to="/">Book List</Link> <span>My Cart</span>
      </h2>

      <h3>Total Price: &#8378;19.99</h3>

      {context.state.cart.map((book) => (
        <div className="book">
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Author: {book.author}</p>
            <p>Price: &#8378;{book.price}</p>
            <p>Total Price: &#8378;{book.price * book.count}</p>
            <p>You have {book.count} books in the your cart</p>
            <button>-</button>
            <button>Out of the cart</button>
            <button>+</button>
          </div>
        </div>
      ))}

      {/*  <div className="book">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51eqjXwFzwL._SX344_BO1,204,203,200_.jpg"
          alt="Simyacı"
        />
        <div>
          <h4>Simyaci</h4>
          <p>Yazar: Paulo Coelho</p>
          <p>Fiyat: &#8378;19.99</p>
          <p>Toplam: &#8378;19.99</p>
          <p>Sepetinizde bu kitaptan toplam 1 adet var.</p>
          <button>-</button>
          <button>Sepetten Çıkar</button>
          <button>+</button>
        </div>
      </div> */}
    </div>
  );
};

export default Cart;
