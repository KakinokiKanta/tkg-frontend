"use client";

import { useEffect, useState } from "react";

export const useAnimationStraight = () => {
  const LEFT_PADDING = 15; // キャラの移動域の左余白
  const RIGHT_PADDING = 85; // キャラの移動域の右余白
  const TOP_PADDING = 60; // キャラの移動域の上余白
  const BOTTOM_PADDING = 85; // キャラの移動域の下余白
  const MIN_DURATION = 1000; // キャラの最短静止時間 [msec]
  const MAX_DURATION = 3000; // キャラの最長静止時間 [msec]
  const MAX_SPEED = 0.1; // キャラの最高速度
  const MIN_SPEED = 0.05; // キャラの最低速度
  // const STOP_PROBABILITY = 0.0001; // キャラが止まる確率
  const [position, setPosition] = useState({ x: 50, y: 70 }); // キャラの初期位置

  // キャラ移動の方向を決める関数
  const getRandomDirection = () => {
    const angle = Math.random() * Math.PI * 2;
    return { x: Math.cos(angle), y: Math.sin(angle) };
  };
  // キャラ移動の速度を決める関数
  const getRandomSpeed = () => {
    return Math.random() * (MAX_SPEED + MIN_SPEED) + MIN_SPEED;
  };

  const [direction, setDirection] = useState(getRandomDirection()); //キャラ移動の方向を表す
  const [speed, setSpeed] = useState(getRandomSpeed()); //キャラ移動の速度を表す
  const [isChangingDirection, setIsChangingDirection] = useState(false); // キャラ移動の方向転換を表す

  // キャラ移動を処理する関数
  useEffect(() => {
    const updatePosition = () => {
      // 方向転換の処理
      if (isChangingDirection) {
        const stopDuration =
          Math.random() * (MAX_DURATION - MIN_DURATION) + MIN_DURATION;
        setTimeout(() => {
          setDirection(getRandomDirection());
          setSpeed(getRandomSpeed());
          setIsChangingDirection(false);
        }, stopDuration);
      }

      //  移動座標の計算
      const newPosition = {
        x: position.x + direction.x * speed,
        y: position.y + direction.y * speed,
      };

      // 移動を実行するかを判定
      let stopable: boolean;
      if (
        newPosition.x < LEFT_PADDING ||
        newPosition.x > RIGHT_PADDING ||
        newPosition.y < TOP_PADDING ||
        newPosition.y > BOTTOM_PADDING
      ) {
        stopable = true;
      } else {
        // stopable = Math.random() < STOP_PROBABILITY ? true : false;
        stopable = false;
      }

      if (stopable) {
        setIsChangingDirection(true);
      } else {
        setPosition(newPosition);
      }
    };
    const animationFrame = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(animationFrame);
  }, [position, direction, speed, isChangingDirection]);

  return { ...position };
};
