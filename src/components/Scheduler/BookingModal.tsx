import bookingStyles from "../Scheduler/BookingModal.module.css";
import React from "react";
import ModalLayout from "./ModalLayout";

const BookingModal = ({ currentPage }) => {
  return (
    <div>
      <ModalLayout />
      <div className={bookingStyles.container}></div>
    </div>
  );
};

export default BookingModal;
