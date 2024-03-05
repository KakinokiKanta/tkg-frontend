"use client";

import Image from "next/image";
import styles from "./CharacterImg.module.scss";
import { useAnimationStraight } from "../../_hooks/useAnimationStraight";
// import { useAnimationRestless } from "../../_hooks/useAnimationRestless";

const characterList = {
  kazama: {
    images: {
      first: ["imagePass", "motionImagePass"],
      second: ["imagePass", "motionImagePass"],
      third: [
        "/character/kazama/pokobe-pix.png",
        "/character/kazama/pokobe-move.png",
      ],
      rare: [
        "/character/kazama/pokobe-reverse.png",
        "/character/kazama/pokobe_nobe_pix.png",
      ],
    },
  },
  nakiri: {
    images: {
      first: ["imagePass", "motionImagePass"],
      second: ["imagePass", "motionImagePass"],
      third: ["imagePass", "motionImagePass"],
    },
  },
  minato: {
    images: {
      first: ["imagePass", "motionImagePass"],
      second: ["imagePass", "motionImagePass"],
      third: ["imagePass", "motionImagePass"],
    },
  },
};

export const CharacterImg = () => {
  const { characterImageIndex, position, swayble, rareFlag } =
    useAnimationStraight(characterList.kazama.images.third);
  // const { position, swayble } = useAnimationStraight();
  // const position = useAnimationRestless();

  return (
    <div
      className={styles.move}
      // className={`${styles.move} ${swayble && styles.sway}`} // キャラに揺れるアニメーションを追加
      style={{ top: `${position.y}%`, left: `${position.x}%` }}
    >
      <Image
        src={
          rareFlag
            ? characterList.kazama.images.rare[characterImageIndex]
            : characterList.kazama.images.third[characterImageIndex]
        }
        // src={"/character/kazama/pokobe-pix.png"}
        width={200}
        height={160}
        alt="キャラクター画像"
        className={styles.img}
      />
    </div>
  );
};
