import React, { useEffect, useState } from "react";
import {
  decrementCarpetRoomPrice,
  decrementCarpetBathPrice,
  decrementCarpetHallPrice,
  decrementCarpetStaircasePrice,
  getCarpetRoomPrice,
  getCarpetBathPrice,
  getCarpetHallPrice,
  getCarpetStaircasePrice,
} from "../../../functions/booking/CarpetPrice";

import {
  getRoomProtectPrice,
  getStairProtectPrice,
  getHallProtectPrice,
  getBathProtectPrice,
  decRoomProtectPrice,
  decStaircaseProtectPrice,
  decBathProtectPrice,
  decHallProtectPrice,
} from "../../../functions/booking/CarpetProtectorPricing";

import {
  getBathDeodorizerPrice,
  getHallDeodorizerPrice,
  getRoomDeodorizerPrice,
  getStairDeodorizerPrice,
  decBathDeodorizerPrice,
  decHallDeodorizerPrice,
  decRoomDeodorizerPrice,
  decStaircaseDeodorizerPrice,
} from "../../../functions/booking/CarpetDeodorizer";

import styles from "./CarpetCleaningTable.module.css";

const CarpetCleaningTable = ({
  currentPage,
  carpetState,
  setCarpetState,
  setPrice,
  price,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.carpetBox}>
        <h1>CLEAN</h1>
      </div>
      <div className={styles.protectBox}>
        <h1>PROTECT</h1>
      </div>
      <div className={styles.deodorizeBox}>
        <h1>DEODORIZE</h1>
      </div>
      <div className={styles.roomBox}>
        <h1>Rooms</h1>
      </div>
      <div className={styles.bathBox}>
        <h1>Bath/Laundry</h1>
      </div>
      <div className={styles.entryBox}>
        <h1>Entry/Hall</h1>
      </div>
      <div className={styles.staircaseBox}>
        <h1>Staircase</h1>
      </div>

      <div className={styles.counterBox}>
        <button
          className={styles.buttonLeft}
          onClick={() => {
            if (carpetState.room_clean > 0) {
              setCarpetState({
                ...carpetState,
                room_clean: --carpetState.room_clean,
              });
              setPrice(decrementCarpetRoomPrice(carpetState, price));
            }
          }}
        >
          -
        </button>
        {carpetState.room_clean}
        <button
          className={styles.buttonRight}
          onClick={() => {
            if (carpetState.room_clean >= 0) {
              setCarpetState({
                ...carpetState,
                room_clean: ++carpetState.room_clean,
              });
              setPrice(getCarpetRoomPrice(carpetState, price));
            }
          }}
        >
          +
        </button>
      </div>
      <div className={styles.counterBox1}>
        <button
          className={styles.buttonLeft}
          onClick={() => {
            if (carpetState.bath_clean > 0) {
              setCarpetState({
                ...carpetState,
                bath_clean: --carpetState.bath_clean,
              });
              setPrice(decrementCarpetBathPrice(carpetState, price));
            }
          }}
        >
          -
        </button>
        {carpetState.bath_clean}
        <button
          className={styles.buttonRight}
          onClick={() => {
            if (carpetState.bath_clean >= 0) {
              setCarpetState({
                ...carpetState,
                bath_clean: ++carpetState.bath_clean,
              });
              setPrice(getCarpetBathPrice(carpetState, price));
            }
          }}
        >
          +
        </button>
      </div>
      <div className={styles.counterBox2}>
        <button
          className={styles.buttonLeft}
          onClick={() => {
            if (carpetState.entry_clean > 0) {
              setCarpetState({
                ...carpetState,
                entry_clean: --carpetState.entry_clean,
              });
              setPrice(decrementCarpetHallPrice(carpetState, price));
            }
          }}
        >
          -
        </button>
        {carpetState.entry_clean}
        <button
          className={styles.buttonRight}
          onClick={() => {
            if (carpetState.entry_clean >= 0) {
              setCarpetState({
                ...carpetState,
                entry_clean: ++carpetState.entry_clean,
              });
              setPrice(getCarpetHallPrice(carpetState, price));
            }
          }}
        >
          +
        </button>
      </div>
      <div className={styles.counterBox3}>
        <button
          className={styles.buttonLeft}
          onClick={() => {
            if (carpetState.staircase_clean > 0) {
              setCarpetState({
                ...carpetState,
                staircase_clean: --carpetState.staircase_clean,
              });
              setPrice(decrementCarpetStaircasePrice(carpetState, price));
            }
          }}
        >
          -
        </button>
        {carpetState.staircase_clean}
        <button
          className={styles.buttonRight}
          onClick={() => {
            if (carpetState.staircase_clean >= 0) {
              setCarpetState({
                ...carpetState,
                staircase_clean: ++carpetState.staircase_clean,
              });
              setPrice(getCarpetStaircasePrice(carpetState, price));
            }
          }}
        >
          +
        </button>
      </div>
      <div className={styles.counterBox4}>
        <button
          className={styles.buttonLeft}
          onClick={() => {
            if (carpetState.room_protect > 0) {
              setCarpetState({
                ...carpetState,
                room_protect: --carpetState.room_protect,
              });
              setPrice(decRoomProtectPrice(carpetState, price));
            }
          }}
        >
          -
        </button>
        {carpetState.room_protect}
        <button
          className={styles.buttonRight}
          onClick={() => {
            if (carpetState.room_protect >= 0) {
              setCarpetState({
                ...carpetState,
                room_protect: ++carpetState.room_protect,
              });
              setPrice(getRoomProtectPrice(carpetState, price));
            }
          }}
        >
          +
        </button>
      </div>
      <div className={styles.counterBox5}>
        <button
          className={styles.buttonLeft}
          onClick={() => {
            if (carpetState.bath_protect > 0) {
              setCarpetState({
                ...carpetState,
                bath_protect: --carpetState.bath_protect,
              });
              setPrice(decBathProtectPrice(carpetState, price));
            }
          }}
        >
          -
        </button>
        {carpetState.bath_protect}
        <button
          className={styles.buttonRight}
          onClick={() => {
            if (carpetState.bath_protect >= 0) {
              setCarpetState({
                ...carpetState,
                bath_protect: ++carpetState.bath_protect,
              });
              setPrice(getBathProtectPrice(carpetState, price));
            }
          }}
        >
          +
        </button>
      </div>
      <div className={styles.counterBox6}>
        <button
          className={styles.buttonLeft}
          onClick={() => {
            if (carpetState.entry_protect > 0) {
              setCarpetState({
                ...carpetState,
                entry_protect: --carpetState.entry_protect,
              });
              setPrice(decHallProtectPrice(carpetState, price));
            }
          }}
        >
          -
        </button>
        {carpetState.entry_protect}
        <button
          className={styles.buttonRight}
          onClick={() => {
            if (carpetState.entry_protect >= 0) {
              setCarpetState({
                ...carpetState,
                entry_protect: ++carpetState.entry_protect,
              });
              setPrice(getHallProtectPrice(carpetState, price));
            }
          }}
        >
          +
        </button>
      </div>
      <div className={styles.counterBox7}>
        <button
          className={styles.buttonLeft}
          onClick={() => {
            if (carpetState.staircase_protect > 0) {
              setCarpetState({
                ...carpetState,
                staircase_protect: --carpetState.staircase_protect,
              });
              setPrice(decStaircaseProtectPrice(carpetState, price));
            }
          }}
        >
          -
        </button>
        {carpetState.staircase_protect}
        <button
          className={styles.buttonRight}
          onClick={() => {
            if (carpetState.staircase_protect >= 0) {
              setCarpetState({
                ...carpetState,
                staircase_protect: ++carpetState.staircase_protect,
              });
              setPrice(getStairProtectPrice(carpetState, price));
            }
          }}
        >
          +
        </button>
      </div>
      <div className={styles.counterBox8}>
        <button
          className={styles.buttonLeft}
          onClick={() => {
            if (carpetState.room_deodorize > 0) {
              setCarpetState({
                ...carpetState,
                room_deodorize: --carpetState.room_deodorize,
              });
              setPrice(decRoomDeodorizerPrice(carpetState, price));
            }
          }}
        >
          -
        </button>
        {carpetState.room_deodorize}
        <button
          className={styles.buttonRight}
          onClick={() => {
            if (carpetState.room_deodorize >= 0) {
              setCarpetState({
                ...carpetState,
                room_deodorize: ++carpetState.room_deodorize,
              });
              setPrice(getRoomDeodorizerPrice(carpetState, price));
            }
          }}
        >
          +
        </button>
      </div>
      <div className={styles.counterBox9}>
        <button
          className={styles.buttonLeft}
          onClick={() => {
            if (carpetState.bath_deodorize > 0) {
              setCarpetState({
                ...carpetState,
                bath_deodorize: --carpetState.bath_deodorize,
              });
              setPrice(decBathDeodorizerPrice(carpetState, price));
            }
          }}
        >
          -
        </button>
        {carpetState.bath_deodorize}
        <button
          className={styles.buttonRight}
          onClick={() => {
            if (carpetState.bath_deodorize >= 0) {
              setCarpetState({
                ...carpetState,
                bath_deodorize: ++carpetState.bath_deodorize,
              });
              setPrice(getBathDeodorizerPrice(carpetState, price));
            }
          }}
        >
          +
        </button>
      </div>
      <div className={styles.counterBox10}>
        <button
          className={styles.buttonLeft}
          onClick={() => {
            if (carpetState.entry_deodorize > 0) {
              setCarpetState({
                ...carpetState,
                entry_deodorize: --carpetState.entry_deodorize,
              });
              setPrice(decHallDeodorizerPrice(carpetState, price));
            }
          }}
        >
          -
        </button>
        {carpetState.entry_deodorize}
        <button
          className={styles.buttonRight}
          onClick={() => {
            if (carpetState.entry_deodorize >= 0) {
              setCarpetState({
                ...carpetState,
                entry_deodorize: ++carpetState.entry_deodorize,
              });
              setPrice(getHallDeodorizerPrice(carpetState, price));
            }
          }}
        >
          +
        </button>
      </div>
      <div className={styles.counterBox11}>
        <button
          className={styles.buttonLeft}
          onClick={() => {
            if (carpetState.staircase_deodorize > 0) {
              setCarpetState({
                ...carpetState,
                staircase_deodorize: --carpetState.staircase_deodorize,
              });
              setPrice(decStaircaseDeodorizerPrice(carpetState, price));
            }
          }}
        >
          -
        </button>
        {carpetState.staircase_deodorize}
        <button
          className={styles.buttonRight}
          onClick={() => {
            if (carpetState.staircase_deodorize >= 0) {
              setCarpetState({
                ...carpetState,
                staircase_deodorize: ++carpetState.staircase_deodorize,
              });
              setPrice(getStairDeodorizerPrice(carpetState, price));
            }
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CarpetCleaningTable;
