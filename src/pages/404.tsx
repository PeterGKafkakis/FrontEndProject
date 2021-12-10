import Lottie from "react-lottie";
import errLottie from "../lotties/err.json";
import styles from "../../styles/err.module.css";
export default function Custom404() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: errLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.container}>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
