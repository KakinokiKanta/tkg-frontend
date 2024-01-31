"use client";

import Image from "next/image";
import styles from "./CharacterImg.module.scss";
import { useAnimationRestless } from "../../_hooks/useAnimationRestless";

export const CharacterImg = () => {
  const position = useAnimationRestless();

  return (
    <div
      className={styles.move}
      style={{ top: `${position.x}%`, left: `${position.y}%` }}
    >
      <Image
        src={"/character/heart_creature.png"}
        width={200}
        height={160}
        alt="キャラクター画像"
        className={styles.img}
      />
    </div>
  );
};
