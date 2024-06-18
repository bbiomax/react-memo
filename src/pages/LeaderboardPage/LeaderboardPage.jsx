import { useEffect, useState } from "react";
import styles from "./LeaderboardPage.module.css";
import { getLeaderboard } from "../../api";
import { Link } from "react-router-dom";

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await getLeaderboard();
        data.sort((a, b) => a.time - b.time);
        const sliceData = data.slice(0, 10);
        setLeaderboard(sliceData);
      } catch (error) {
        console.error("Ошибка загрузки лидерборда: ", error);
      }
    };

    fetchLeaderboard();
  }, [setLeaderboard]);

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");
    const formattedTime = `${formattedMinutes}:${formattedSeconds}`;
    return formattedTime;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.title}>Лидерборд</span>
          <Link className={styles.button} to="/">
            Начать игру
          </Link>
        </div>
        <div className={styles.board}>
          <div className={styles.boardNames}>
            <span className={styles.position}>Позиция</span>
            <span className={styles.username}>Пользователь</span>
            <span className={styles.achievements}>Достижения</span>
            <span className={styles.time}>Время</span>
          </div>

          {leaderboard?.length > 0 ? (
            <div className={styles.boardRating}>
              {leaderboard.map((leader, index) => {
                const isHardMode = leader.achievements.find(achievement => achievement === 1);
                const isWithoutHelpMode = leader.achievements.find(achievement => achievement === 2);

                return (
                  <div key={index} className={styles.boardRatingPlace}>
                    <span className={styles.position}>#{index + 1}</span>
                    <span className={styles.username}>{leader.name}</span>
                    <div className={styles.achievements}>
                      <img src={isHardMode ? "icon-hardmode.png" : "non-icon-hardmode.png"} alt="non-icon-hardmode" />
                      <img
                        src={isWithoutHelpMode ? "icon-withouthelp.png" : "non-icon-withouthelp.png"}
                        alt="non-icon-hardmode"
                      />
                    </div>
                    <span className={styles.time}>{formatTime(leader.time)}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={styles.title}>Данные загружаются...</div>
          )}
        </div>
      </div>
    </div>
  );
}
