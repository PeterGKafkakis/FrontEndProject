import styles from "../Home/HeaderSection.module.css";
import Image from "next/image";
import React from "react";
import SchedulerModal from "../Scheduler/SchedulerModal";
import { useState } from "react";

const HeaderSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>#1 Carpet Cleaning Service in Maryland</h1>
      </div>
      <p className={styles.caption}>
        As a locally operated and family owned business for over 20 years we
        have invested in staying up to date with the best training and best
        equipment the cleaning industry has to offer
      </p>
      <p className={styles.button}>
        <button>Book Online</button>
      </p>
      <p className={styles.caption}>
        M-S 8AM - 8PM | Call or Text at 410-236-3999 | Email :
        customerservice@royalservicesmd.com
      </p>
      <div className={styles.boxContainer}></div>
    </div>
  );
};

export default HeaderSection;
