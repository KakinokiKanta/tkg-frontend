"use client";

import Image from "next/image";
import styles from "./CharacterImg.module.scss";
import { useAnimationStraight } from "../../_hooks/useAnimationStraight";
// import { useAnimationRestless } from "../../_hooks/useAnimationRestless";

export const CharacterImg = () => {
  const { position, swayble } = useAnimationStraight();
  // const position = useAnimationRestless();

  return (
    <div
      className={styles.move}
      // className={`${styles.move} ${swayble && styles.sway}`} // キャラに揺れるアニメーションを追加
      style={{ top: `${position.y}%`, left: `${position.x}%` }}
    >
      <Image
        src={"/character/kazama/pokobe-pix.png"}
        width={200}
        height={160}
        alt="キャラクター画像"
        className={styles.img}
      />
    </div>
  );
};
