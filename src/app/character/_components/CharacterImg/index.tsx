"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./CharacterImg.module.scss";

export const CharacterImg = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const X_MAX = 5;
  const Y_MAX = 5;

  // キャラ移動の方向を決める関数
  const getRandomDirection = () => {
    const xDirection = Math.random() * X_MAX * 2 - X_MAX;
    const yDirection = Math.random() * Y_MAX * 2 - Y_MAX;
    return { x: xDirection, y: yDirection };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((position) => {
        return {
          x: position.x + getRandomDirection().x,
          y: position.y + getRandomDirection().y,
        };
      });
    }, 1000);
    // return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles.move}
      style={{ top: `${position.x}%`, left: `${position.y}%` }}
    >
      <Image
        src={"/character/pokobe-pix.png"}
        width={200}
        height={160}
        alt="キャラクター画像"
        className={styles.img}
      />
    </div>
  );
};
