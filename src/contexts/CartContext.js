import { createContext, useContext, useState } from "react";

const CartList = createContext();

function CartContext({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [cartList, setCartList] = useState([]);
  const categories = cartList.map((item) => item.category);

  function handleAddItem(item, count) {
    setCartList((cart) => [...cart, { ...item, count }]);
  }

  function handleIncCount(cat) {
    setCartList((cart) =>
      cart.map((item) => {
        if (item.category === cat) return { ...item, count: item.count + 1 };
        else return item;
      }),
    );
  }
  function handleDecCount(cat) {
    setCartList((cart) =>
      cart.map((item) => {
        if (item.category === cat) return { ...item, count: item.count - 1 };
        else return item;
      }),
    );
  }

  function handleRemoveItem(category) {
    setCartList((cart) => cart.filter((item) => item.category !== category));
  }

  function clearList() {
    setCartList([]);
    setShowModal(false);
  }

  return (
    <CartList.Provider
      value={{
        cartList,
        categories,
        handleAddItem,
        handleDecCount,
        handleIncCount,
        handleRemoveItem,
        clearList,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </CartList.Provider>
  );
}

function useCartList() {
  const context = useContext(CartList);
  if (context === undefined)
    throw new Error("using context CartList out of scope");
  return context;
}

export { useCartList, CartContext };
