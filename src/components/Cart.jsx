import { useCartList } from "../contexts/CartContext";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import OrderModal from "./OrderModal";

function Cart() {
  function onConfirm() {
    setShowModal(true);
  }

  const { cartList, showModal, setShowModal } = useCartList();
  const total = cartList
    .reduce((acc, item) => acc + item.price * item.count, 0)
    .toFixed(2);

  return (
    <div className={styles.cart}>
      <h4>Your Cart ({cartList.length})</h4>

      {cartList.length === 0 && (
        <div className={styles.cartEmpty}>
          <img src="./assets/images/illustration-empty-cart.svg" alt="" />
          <p>Your added items will appear here</p>
        </div>
      )}

      {cartList.length > 0 && (
        <>
          <ul className={styles.cartList}>
            <li>
              {cartList.map((cartItem) => (
                <CartItem item={cartItem} key={cartItem.category} />
              ))}
            </li>
          </ul>
          <div className={styles.summary}>
            <div className={styles.totalRow}>
              <span>Order Total</span>
              <span className={styles.totalPrice}>${total}</span>
            </div>

            <div className={styles.carbon}>
              🌱 This is a <strong>carbon-neutral</strong> delivery
            </div>

            <button className={styles.confirmBtn} onClick={onConfirm}>
              Confirm Order
            </button>
          </div>
        </>
      )}

      {showModal && <OrderModal total={total} />}
    </div>
  );
}

export default Cart;
