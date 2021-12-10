import styles from "../Scheduler/ModalLayout.module.css";

import React from "react";

const ModalLayout = () => {
  return (
    <div>
      <div className={styles.progressContainer}>
        <div className={styles.itemLeft}>Choose Services</div>
        <div className={styles.item}>Scheduling</div>
        <div className={styles.item}>Contact Information</div>
        <div className={styles.item}>Review Order </div>
        <div className={styles.itemRight}>Confirmation</div>
      </div>
    </div>
  );
};

export default ModalLayout;
