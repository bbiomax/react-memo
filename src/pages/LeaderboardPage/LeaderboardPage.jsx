import { useEffect, useState } from "react";
import styles from "./LeaderboardPage.module.css";
import { getLeaderboard } from "../../api";

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await getLeaderboard();
        setLeaderboard(data);
      } catch (error) {
        console.error("Ошибка загрузки лидерборда: ", error);
      }
    };

    fetchLeaderboard();
  }, []);

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

          {leaderboard.length > 0 ? (
            <div className={styles.boardRating}>
              {leaderboard.map((leader, index) => (
                <div key={index} className={styles.boardRatingPlace}>
                  <span>#{index + 1}</span>
                  <span>{leader.name}</span>
                  <span>{leader.time}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.title}>Данные загружаются...</div>
          )}
        </div>
      </div>
    </div>
  );
}
