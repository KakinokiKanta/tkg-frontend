import Image from "next/image";
import styles from "./character.module.scss";
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
      <div className={styles.frame}>
        <h1 className={styles.title}>TKG World!!</h1>
      </div>
      <CharacterImg />
    </div>
  );
};

export default Character;
