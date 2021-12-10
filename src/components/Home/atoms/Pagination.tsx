import styles from "../Scheduler/SchedulerModal.module.css";

import React from "react";
import ZipcodeModal from "../../Scheduler/ZipcodeModal";
import BookingModal from "../../Scheduler/BookingModal";
import ConfirmationModal from "../../Scheduler/ConfirmationModal";

const Pagination = ({ paginate }) => {
  const pageNumbers = [1, 2, 3];

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
