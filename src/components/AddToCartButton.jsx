import { useState } from "react";
import styles from "./AddToCartButton.module.css";
import { useCartList } from "../contexts/CartContext";

function AddToCartButton({ isAdded, setIsAdded, item }) {
  const [counter, setCounter] = useState(1);
  const { handleAddItem, handleDecCount, handleIncCount, handleRemoveItem } =
    useCartList();

  function handleAddingItemToCart() {
    setIsAdded(true);
    handleAddItem(item, counter);
  }

  function handleInc() {
    setCounter((x) => x + 1);
    handleIncCount(item.category);
  }

  function handleDec() {
    if (counter === 1) {
      setIsAdded(false);
      handleRemoveItem(item.category);
    } else setCounter((x) => (x > 1 ? x - 1 : 0));
    handleDecCount(item.category);
  }

  if (!isAdded)
    return (
      <div className={styles.cart} onClick={handleAddingItemToCart}>
        <i class="fa-solid fa-cart-arrow-down"></i>
        <p>Add to Cart</p>
      </div>
    );

  return (
    <div className={styles.cartAdded}>
      <button className={styles.dec} onClick={handleDec}>
        <span>-</span>
      </button>

      <p>{counter}</p>

      <button className={styles.inc} onClick={handleInc}>
        +
      </button>
    </div>
  );
}

export default AddToCartButton;
