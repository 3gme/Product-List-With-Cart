import { useCartList } from "../contexts/CartContext";
import styles from "./CartItem.module.css";

function CartItem({ item, onRemove }) {
  const { handleRemoveItem } = useCartList();
  const { name, count, price } = item;

  const total = (count * price).toFixed(2);

  return (
    <div className={styles.cartItem}>
      <div className={styles.left}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.details}>
          <span className={styles.count}>{count}x</span>
          <span className={styles.unitPrice}> @ ${price.toFixed(2)}</span>
          <span className={styles.total}> ${total}</span>
        </p>
      </div>

      <button
        className={styles.removeBtn}
        onClick={() => handleRemoveItem?.(item.category)}
      >
        ✕
      </button>
    </div>
  );
}

export default CartItem;
