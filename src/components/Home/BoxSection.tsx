import styles from "../Home/BoxSection.module.css";
import { BsBookmarkCheck, BsStar } from "react-icons/bs";
import { BiHappyHeartEyes } from "react-icons/bi";
const BoxSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.icon}>
          <BsBookmarkCheck />
        </p>
        <h1 className={styles.boxHeader}>10,000+</h1>
        <p>Satisfied Customers</p>
      </div>
      <div className={styles.box}>
        <p className={styles.icon}>
          <BsStar />
        </p>
        <h1 className={styles.boxHeader}>500+</h1>
        <p>Five Star Reviews</p>
      </div>
      <div className={styles.box}>
        <p className={styles.icon}>
          <BiHappyHeartEyes />
        </p>
        <h1 className={styles.boxHeader}>100%</h1>
        <p>Customer Satisfaction</p>
      </div>
    </div>
  );
};

export default BoxSection;
