import { useCartList } from "../contexts/CartContext";
import styles from "./OrderModal.module.css";

function OrderModal({ total }) {
  const { cartList: cart, clearList } = useCartList();

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.icon}>✓</div>
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
        </div>

        <div className={styles.items}>
          {cart.map((item) => (
            <div key={item.id} className={styles.item}>
              <img src={item.image.thumbnail} alt={item.name} />

              <div className={styles.info}>
                <p className={styles.name}>{item.name}</p>
                <span>
                  {item.count}x @ ${item.price.toFixed(2)}
                </span>
              </div>

              <p className={styles.itemTotal}>
                ${(item.price * item.count).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className={styles.total}>
          <span>Order Total</span>
          <strong>${total}</strong>
        </div>

        <button className={styles.button} onClick={clearList}>
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default OrderModal;
