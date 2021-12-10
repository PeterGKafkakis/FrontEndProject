import styles from "../Home/GallerySection.module.css";
import Image from "next/dist/client/image";
const GallerySection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <Image
            alt='Carpet Cleaning Picture'
            src='https://royalcarpetimages.s3.amazonaws.com/Before1.jpg'
            layout='fill'
          ></Image>
        </div>
        <div className={styles.item}>
          {" "}
          <Image
            alt='Upholstery Cleaning'
            src='https://royalcarpetimages.s3.amazonaws.com/Before2.jpg'
            layout='fill'
          ></Image>
        </div>
        <div className={styles.item}>
          {" "}
          <Image
            alt='Carpet Cleaning Picture'
            src='https://royalcarpetimages.s3.amazonaws.com/Before3.jpg'
            layout='fill'
          ></Image>
        </div>
        <div className={styles.item}>
          {" "}
          <Image
            alt='Carpet Cleaning Picture'
            src='https://royalcarpetimages.s3.amazonaws.com/After1.jpg'
            layout='fill'
          ></Image>
        </div>
        <div className={styles.item}>
          {" "}
          <Image
            alt='Carpet Cleaning Picture'
            src='https://royalcarpetimages.s3.amazonaws.com/Before5.jpg'
            layout='fill'
          ></Image>
        </div>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.item}>
          {" "}
          <Image
            alt='Carpet Cleaning Picture'
            src='https://royalcarpetimages.s3.amazonaws.com/After1.jpg'
            layout='fill'
          ></Image>
        </div>
        <div className={styles.item}>
          {" "}
          <Image
            alt='Upholstery Cleaning'
            src='https://royalcarpetimages.s3.amazonaws.com/After2.jpg'
            layout='fill'
          ></Image>
        </div>
        <div className={styles.item}>
          {" "}
          <Image
            alt='Carpet Cleaning Picture'
            src='https://royalcarpetimages.s3.amazonaws.com/After3.jpg'
            layout='fill'
          ></Image>
        </div>
        <div className={styles.item}>
          {" "}
          <Image
            alt='Carpet Cleaning Picture'
            src='https://royalcarpetimages.s3.amazonaws.com/After1.jpg'
            layout='fill'
          ></Image>
        </div>
        <div className={styles.item}>
          {" "}
          <Image
            alt='Carpet Cleaning Picture'
            src='https://royalcarpetimages.s3.amazonaws.com/After5.jpg'
            layout='fill'
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
