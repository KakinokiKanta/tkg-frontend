"use client";

import Image from "next/image";
import styles from "./CharacterImg.module.scss";

export const CharacterImg = () => {
  return (
    <div>
      <Image
        src={"/character/dragon1_pix.png"}
        width={250}
        height={300}
        alt="キャラクター画像"
        className={styles.img}
      />
    </div>
  );
};
