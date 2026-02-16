import styles from "./MenuItem.module.css";
import AddToCartButton from "./AddToCartButton";
import { memo, useEffect, useState } from "react";
import { useCartList } from "../contexts/CartContext";

function MenuItem({ plate }) {
  const { categories, checkIfInCart } = useCartList();
  const [isAdded, setIsAdded] = useState(checkIfInCart);
  const { category, image, name, price } = plate;

  useEffect(
    function () {
      setIsAdded(categories.find((cat) => cat === category));
    },
    [categories],
  );

  return (
    <div>
      <div className={`${styles.image}`}>
        <img
          src={image.desktop}
          alt={category}
          className={`${isAdded ? styles.activeBorder : ""}`}
        />
        <AddToCartButton
          isAdded={isAdded}
          setIsAdded={setIsAdded}
          item={plate}
        />
      </div>

      <div className={styles.text}>
        <p>{category}</p>
        <p>{name}</p>
        <p>
          <span>$</span>
          {price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default memo(MenuItem);
