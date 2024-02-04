import styles from "./character.module.scss";
import { CharacterImg } from "./_components/CharacterImg";

const Character = () => {
  return (
    <div className={styles.window}>
      <CharacterImg />
    </div>
  );
};

export default Character;
