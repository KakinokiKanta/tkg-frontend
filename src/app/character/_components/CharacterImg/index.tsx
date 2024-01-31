"use client";

import Image from "next/image";
import styles from "./CharacterImg.module.scss";
import { useAnimationStraight } from "../../_hooks/useAnimationStraight";
import { useAnimationRestless } from "../../_hooks/useAnimationRestless";

export const CharacterImg = () => {
  // const position = useAnimationStraight();
  const position = useAnimationRestless();

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
