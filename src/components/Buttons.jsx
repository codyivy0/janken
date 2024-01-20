import { useState } from "react";
import styles from "./Buttons.module.scss";

const Buttons = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [enemy, setEnemy] = useState("");
  const [color, setColor] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [enemyScore, setEnemyScore] = useState(0);

  function handleClick(playerChoice) {
    setEnemy("");
    setMessage("");
    setColor("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const enemyChoice = Math.floor(Math.random() * (4 - 1) + 1);
      // 1 = paper 2 = rock 3 = scissors
      switch (enemyChoice) {
        case 1:
          setEnemy("paper");
          setColor("#00dfba");
          break;
        case 2:
          setEnemy("rock");
          setColor("#fe2bf1");
          break;
        case 3:
          setEnemy("scissors");
          setColor("#0c7ceb");
          break;
        default:
          console.log("error");
          break;
      }

      switch (playerChoice) {
        case "paper":
          if (enemyChoice === 1) {
            setMessage("This is a tie!");
          } else if (enemyChoice === 2) {
            setMessage("You Win!");
            setPlayerScore(prev => prev + 1)
          } else if (enemyChoice === 3) {
            setMessage("You lose!");
            setEnemyScore(prev => prev + 1)
          }
          break;
        case "rock":
          if (enemyChoice === 1) {
            setMessage("You lose!");
            setEnemyScore(prev => prev + 1)
          } else if (enemyChoice === 2) {
            setMessage("This is a tie!");
          } else if (enemyChoice === 3) {
            setMessage("You win!");
            setPlayerScore(prev => prev + 1)
          }
          break;
        case "scissors":
          if (enemyChoice === 1) {
            setMessage("You win!");
            setPlayerScore(prev => prev + 1)
          } else if (enemyChoice === 2) {
            setMessage("You lose!");
            setEnemyScore(prev => prev + 1)
          } else if (enemyChoice === 3) {
            setMessage("This is a tie!");
          }
          break;
        default:
          console.log(
            `ERROR what did you do? Player choice : ${playerChoice} `
          );
          break;
      }
    }, 1000);
  }

  function handleReset() {
    setMessage('')
    setEnemy('')
    setColor('')
    setEnemyScore(0)
    setPlayerScore(0)
  }

  return (
    <>
      <section className={styles.gameContainer}>
        <div className={styles.infoBar}>
          <p>Your Score: {playerScore}</p>
          <p>Enemy Score: {enemyScore}</p>
        </div>
        <div className={styles.gameButtonContainer}>
          <div className={styles.top}>
            <img
              className={styles.gameButton}
              onClick={() => handleClick(`paper`)}
              src="/paper.png"
              alt=""
            />
          </div>
          <div className={styles.bottom}>
            <img
              className={styles.gameButton}
              onClick={() => handleClick(`rock`)}
              src="/rock.png"
              alt=""
            />
            <img
              className={styles.gameButton}
              onClick={() => handleClick(`scissors`)}
              src="/scissors.png"
              alt=""
            />
          </div>
        </div>

        {isLoading && <h2 className={styles.textCenter}>Loading...</h2>}
        {enemy && (
          <h2 className={styles.textCenter}>
            The CPU chose <span style={{ color: color }}>{enemy}</span>
          </h2>
        )}
        {message && <h1 className={styles.textCenter}>{message}</h1>}
        <button className={styles.resetBtn} onClick={() => handleReset()}>
          RESET
        </button>
      </section>
    </>
  );
};

export default Buttons;
