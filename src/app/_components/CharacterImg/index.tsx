"use client";

import Image from "next/image";
import styles from "./CharacterImg.module.scss";

export const CharacterImg = () => {
  return (
    <div>
      <Image
        src={"/character/pokobe-pix.png"}
        width={300}
        height={250}
        alt="キャラクター画像"
        className={styles.img}
      />
    </div>
  );
};
