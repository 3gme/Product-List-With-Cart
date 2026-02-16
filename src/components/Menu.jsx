import { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import MenuItem from "./MenuItem";

function Menu() {
  const [plates, setPlates] = useState([]);

  useEffect(function () {
    async function fetchdata() {
      const res = await fetch(`${process.env.PUBLIC_URL}/data/data.json`);

      const data = await res.json();
      setPlates(data);
    }
    fetchdata();
  }, []);

  return (
    <div>
      <h2>Desserts</h2>
      <ul className={styles.menu}>
        {plates.map((plate) => (
          <li>
            <MenuItem plate={plate} key={plate.category} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
