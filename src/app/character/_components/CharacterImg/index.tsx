"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./CharacterImg.module.scss";
import { useAnimationFrame } from "../../_hooks/useAnimationFrame";

export const CharacterImg = () => {
  const position = useAnimationFrame();

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
