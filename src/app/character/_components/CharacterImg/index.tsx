"use client";

import Image from "next/image";
import styles from "./CharacterImg.module.scss";
import { useAnimationSlowly } from "../../_hooks/useAnimationSlowly";

export const CharacterImg = () => {
  const position = useAnimationSlowly();

  return (
    <div
      className={styles.move}
      style={{ top: `${position.y}%`, left: `${position.x}%` }}
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
