import { useState } from "react";
import styles from "./Buttons.module.scss";

const Buttons = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [enemy, setEnemy] = useState("");
  const [color, setColor] = useState("");

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
          } else if (enemyChoice === 3) {
            setMessage("You lose!");
          }
          break;
        case "rock":
          if (enemyChoice === 1) {
            setMessage("You lose!");
          } else if (enemyChoice === 2) {
            setMessage("This is a tie!");
          } else if (enemyChoice === 3) {
            setMessage("You win!");
          }
          break;
        case "scissors":
          if (enemyChoice === 1) {
            setMessage("You win!");
          } else if (enemyChoice === 2) {
            setMessage("You lose!");
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
  return (
    <>
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
    </>
  );
};

export default Buttons;
