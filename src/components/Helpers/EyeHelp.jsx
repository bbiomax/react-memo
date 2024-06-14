import { useState } from "react";
import styles from "./EyeHelp.module.css";

export function EyeHelp() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.eyeHelp} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src="../eye.png" alt="eye-help" />
      </div>
      {showTooltip && (
        <div className={styles.tooltip}>
          <strong>Прозрение</strong>
          <span>На 5 секунд показываются все карты. Таймер длительности игры на это время останавливается</span>
        </div>
      )}
    </div>
  );
}
