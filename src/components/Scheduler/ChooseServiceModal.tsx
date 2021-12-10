import styles from "../Scheduler/ChooseServiceModal.module.css";

import React, { useState } from "react";
import ModalLayout from "./ModalLayout";
import { ArrowCircleDown } from "iconsax-react";
import CarpetCleaningTable from "./ServiceTables/CarpetCleaningTable";

const ChooseServiceModal = ({ currentPage }) => {
  const [carpetState, setCarpetState] = useState({
    room_clean: 0,
    bath_clean: 0,
    entry_clean: 0,
    staircase_clean: 0,
    room_protect: 0,
    bath_protect: 0,
    entry_protect: 0,
    staircase_protect: 0,
    room_deodorize: 0,
    bath_deodorize: 0,
    entry_deodorize: 0,
    staircase_deodorize: 0,
  });
  const [price, setPrice] = useState(0);
  const [carpet, setCarpet] = useState(false);
  return (
    <div>
      <ModalLayout />
      <div className={styles.container}>
        <div className={styles.zipbox}>
          <p>Zip : {localStorage.getItem("zipcode")}</p>
          <p>Royal Carpet Cleaners </p>
          <p>443-307-3305</p>
        </div>
        <div className={styles.quotebox}>
          <p>Your Quote</p>
          <p>Estimated Amount: </p>
          <p>${price}</p>
        </div>
        <div className={styles.accuratebox}>
          <p>Please Check Info That Applys</p>
          <p>
            <input type='checkbox' />
            No Parking Nearby
          </p>
          <p>
            <input type='checkbox' />
            You are on 3rd Floor or higher
          </p>
          <p>
            <input type='checkbox' />
            Guaranteed Parking
          </p>
        </div>
        <div className={styles.quoteContainer}>
          <h1 className={styles.quoteHeader}>What can we clean for you?</h1>
          <div className={styles.serviceItem}>
            <h1 className={styles.serviceItemHeader}>Carpet Cleaning</h1>
            <button
              onClick={() => {
                if (carpet === false) {
                  setCarpet(true);
                } else {
                  setCarpet(false);
                }
              }}
              className={styles.serviceItemIcon}
            >
              <ArrowCircleDown size='32' color='#0f1218' />
            </button>
          </div>
          {carpet === true && (
            <CarpetCleaningTable
              currentPage={undefined}
              carpetState={carpetState}
              setCarpetState={setCarpetState}
              price={price}
              setPrice={setPrice}
            />
          )}
          <div className={styles.serviceItem}>
            <h1 className={styles.serviceItemHeader}>Upholstery Cleaning</h1>
            <button
              onClick={() => {
                if (carpet === false) {
                  setCarpet(true);
                } else {
                  setCarpet(false);
                }
              }}
              className={styles.serviceItemIcon}
            >
              <ArrowCircleDown size='32' color='#0f1218' />
            </button>
          </div>
          <div className={styles.serviceItem}>
            <h1 className={styles.serviceItemHeader}>Tile & Grout Cleaning</h1>
            <button
              onClick={() => {
                if (carpet === false) {
                  setCarpet(true);
                } else {
                  setCarpet(false);
                }
              }}
              className={styles.serviceItemIcon}
            >
              <ArrowCircleDown size='32' color='#0f1218' />
            </button>
          </div>
          <div className={styles.serviceItem}>
            <h1 className={styles.serviceItemHeader}>Area Rug Cleaning</h1>
            <button
              onClick={() => {
                if (carpet === false) {
                  setCarpet(true);
                } else {
                  setCarpet(false);
                }
              }}
              className={styles.serviceItemIcon}
            >
              <ArrowCircleDown size='32' color='#0f1218' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseServiceModal;
