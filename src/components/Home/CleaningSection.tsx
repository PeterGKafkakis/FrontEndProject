import styles from "../Home/CleaningSection.module.css";
import Image from "next/image";
import { ArrowCircleDown2, Award } from "iconsax-react";

const CleaningSection = () => {
  return (
    <div>
      <div className={styles.serviceContainer}>
        <h1 className={styles.serviceHeader}> Cleaning Services </h1>
        <p>
          <ArrowCircleDown2 size='36' color='#10a574' variant='Broken' />
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <h1>Carpet Cleaning</h1>
            <div>
              <Award size='32' color='#10a574' variant='Broken' />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <h1>Uholstery Cleaning</h1>
            <div>
              <Award size='32' color='#10a574' variant='Broken' />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <h1>Tile & Grout Cleaning</h1>
            <div>
              <Award size='32' color='#10a574' variant='Broken' />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <h1>Mattress Cleaning</h1>
            <div>
              <Award size='32' color='#10a574' variant='Broken' />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <h1>Pet Odor & Stain Removal</h1>
            <div>
              <Award size='32' color='#10a574' variant='Broken' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningSection;
