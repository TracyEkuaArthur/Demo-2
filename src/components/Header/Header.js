import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <br />
      <div className={styles.text}>
        <h1>Wake Up With Your Breakfast Ready!!!</h1>
        <p>
          Eating breakfast may help your heart, digestion, bones and more.It
          also helps you start the day off right because it provides your body
          with essentisl vitamins and minerals. Breakfast improves your energy
          levels and ability to concentrate in the short term.
        </p>
        <br />
        <button>order your breakfast</button>
      </div>
    </header>
  );
};

export default Header;
