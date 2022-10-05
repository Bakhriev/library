import styles from "./Hamburger.module.scss";
import { useState } from "react";

function Hamburger() {
  const [isOpened, setIsOpened] = useState(false);

  function hamburgerCliked() {
    setIsOpened(!isOpened);
  }

  return (
    <div
      onClick={hamburgerCliked}
      className={`${styles.hamburger_layout} ${
        isOpened && styles.hamburger_hover_animate
      }`}
    >
      <span className={`${styles.bar_layout} ${styles.barTop}`}></span>
      <span className={`${styles.bar_layout} ${styles.barMiddle}`}></span>
      <span className={`${styles.bar_layout} ${styles.barBottom}`}></span>
    </div>
  );
}
export default Hamburger;
