import "./App.css";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import { CartContext } from "./contexts/CartContext";

export default function App() {
  return (
    <main>
      <CartContext>
        <Menu />
        <Cart />
      </CartContext>
    </main>
  );
}
