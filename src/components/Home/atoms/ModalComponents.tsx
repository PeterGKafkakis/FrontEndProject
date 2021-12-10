
import React from "react";
import ZipcodeModal from "../../Scheduler/ZipcodeModal";
import BookingModal from "../../Scheduler/BookingModal";
import ConfirmationModal from "../../Scheduler/ConfirmationModal";
import ChooseServiceModal from "../../Scheduler/ChooseServiceModal";

const ModalComponents = ({ componentKey, currentPage }) => {
  const pageComponents = [
    <ZipcodeModal key={1} currentPage={currentPage} />,
    <ChooseServiceModal key={2} currentPage={currentPage} />,
    <BookingModal key={3} currentPage={currentPage} />,
    <ConfirmationModal key={4} currentPage={currentPage} />,
  ];

  return <> {pageComponents[componentKey]} </>;
};

export default ModalComponents;
