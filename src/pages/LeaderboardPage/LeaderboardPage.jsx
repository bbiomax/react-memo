import styles from "./LeaderboardPage.module.css";

export default function LeaderboardPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.title}>Лидерборд</span>
          <button className={styles.button}>Начать игру</button>
        </div>
        <div className={styles.board}>
          <div className={styles.boardNames}>
            <span>Позиция</span>
            <span>Пользователь</span>
            <span>Время</span>
          </div>
          <div className={styles.boardRating}>
            <div className={styles.boardRatingPlace}>
              <span>#1</span>
              <span>ab98awj_918mlz1lavfh_ru</span>
              <span>01:30</span>
            </div>
            <div className={styles.boardRatingPlace}>
              <span>#2</span>
              <span>ab98awj_918mlz1lavfh_ru</span>
              <span>05:23</span>
            </div>
            <div className={styles.boardRatingPlace}>
              <span>#3</span>
              <span>ab98awj_918mlz1lavfh_ru</span>
              <span>10:47</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
