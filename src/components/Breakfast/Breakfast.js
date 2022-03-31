import React from "react";
import styles from "./Breakfast.module.css";
import { Link } from "react-router-dom";

const Breakfast = () => {
  return (
    <div className={styles.breakfast}>
      <div className={styles.card}>
        <img src="/images/img-1.jpg" alt="" />
      </div>
      <div className={styles.card}>
        <img src="/images/img-2.jpg" alt="" />
      </div>
      <div className={styles.card}>
        <img src="/images/img-3.jpg" alt="" />
      </div>
      <div className={styles.card}>
        <img src="/images/img-4.jpg" alt="" />
      </div>
      <div className={styles.card}>
        <img src="/images/img-5.jpg" alt="" />
      </div>
      <div className={styles.card}>
        <img src="/images/img-6.jpg" alt="" />
      </div>
      <div className={styles.card}>
        <img src="/images/img-7.jpg" alt="" />
      </div>
      <div className={styles.card}>
        <img src="/images/img-8.jpg" alt="" />
      </div>
      <div className={styles.card}>
        <img src="/images/img-9.jpg" alt="" />
      </div>
      <div className={styles.card}>
        <img src="/images/img-10.jpg" alt="" />
      </div>
    </div>
  );
};

export default Breakfast;
