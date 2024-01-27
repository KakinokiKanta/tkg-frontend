import styles from "./page.module.scss";
import { CharacterImg } from "./_components/CharacterImg";

const Character = () => {
  // キャラ移動の方向を決める関数
  const getRandomDirection = () => {
    const angle = Math.random() * Math.PI * 2;
    return { x: Math.cos(angle), y: Math.sin(angle) };
  };

  // キャラ移動の速度を決める関数
  const getRandomSpeed = () => {
    return Math.random() * 2 + 1;
  };

  return (
    <div className={styles.window}>
      <CharacterImg />
    </div>
  );
};

export default Character;
