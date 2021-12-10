import styles from "../Scheduler/ZipcodeModal.module.css";
import { CheckZipcode } from "../Home/atoms/ZipcodeChecker";
import { useState } from "react";
import React from "react";
import ChooseServiceModal from "./ChooseServiceModal";
import ModalLayout from "./ModalLayout";

const ZipcodeModal = ({ currentPage }) => {
  const [zipcode, setZipCode] = useState("");
  const increment = () => {
    currentPage++;
  };
  console.log(currentPage);
  return (
    <div className={styles.container}>
      <h1>Please Enter Your Zipcode</h1>
      <p>
        <input
          value={zipcode}
          type='text'
          placeholder='zipcode'
          onChange={(e) => setZipCode(e.target.value)}
        />
      </p>
      <p>
        <button
          onClick={() => {
            if (CheckZipcode(zipcode)) {
              localStorage.setItem("zipcode", zipcode);
              currentPage = currentPage(1);
            } else {
              console.log("Invalid Zipcode");
            }
          }}
        >
          Next
        </button>
      </p>
    </div>
  );
};

export default ZipcodeModal;
