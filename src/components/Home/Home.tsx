import Head from "next/head";
import Image from "next/image";
import logo from "../../../public/logo.png";
import styles from "../Home/Home.module.css";
import SaleBanner from "./SaleBanner";
import HeaderSection from "./HeaderSection";
import ActiveLink from "./atoms/ActiveLink";
import BoxSection from "./BoxSection";
import CleaningSection from "./CleaningSection";
import GallerySection from "./GallerySection";
import { useState } from "react";
import SchedulerModal from "../Scheduler/SchedulerModal";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import modalStyles from "../Scheduler/SchedulerModal.module.css";
import Pagination from "./atoms/Pagination";
import ModalComponents from "./atoms/ModalComponents";

Modal.setAppElement("#main");

const Layout = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [zipcode, setZipcode] = useState("");

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }

  return (
    <div className={styles.container} id='main'>
      <Head>
        <title>Royal Services MD | Professional Cleaning Services </title>
        <meta name='description' content='Created By Peter Kafkakis' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SaleBanner />

      <div className={styles.banner}>
        <div className={styles.bannerHeader}>
          <Image
            src={logo}
            alt='Royal Carpet Cleaners Logo'
            width={225}
            height={150}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div>
          <ul className={styles.bannerList}>
            <li>
              <ActiveLink href='/'>
                <a>Home</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href='/services'>
                <a>Services</a>
              </ActiveLink>
            </li>
            <li>
              <a
                target='_blank'
                href='https://www.facebook.com/RoyalCarpetMD/photos/?ref=page_internal'
                rel='noopener noreferrer'
              >
                Pictures
              </a>
            </li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>
              <p className={styles.button}>
                <button onClick={openModal}>Book Online</button>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  className={modalStyles.container}
                  contentLabel='Booking Software Modal'
                >
                  <ModalComponents
                    componentKey={currentPage}
                    currentPage={setCurrentPage}
                  />
                </Modal>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <HeaderSection />
      <BoxSection />
      <CleaningSection />
      <GallerySection />
    </div>
  );
};

export default Layout;
