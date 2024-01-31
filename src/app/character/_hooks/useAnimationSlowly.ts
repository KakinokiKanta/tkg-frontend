"use client";

import { useEffect, useState } from "react";

export const useAnimationSlowly = () => {
  const X_PADDING = 10; // キャラの移動域のx軸余白
  const Y_PADDING = 10; // キャラの移動域のy軸余白
  const MIN_DURATION = 1000; // キャラの最短静止時間 [msec]
  const MAX_DURATION = 3000; // キャラの最長静止時間 [msec]
  const MAX_SPEED = 0.1; // キャラの最高速度
  const MIN_SPEED = 0.01; // キャラの最低速度
  const [position, setPosition] = useState({ x: 50, y: 50 }); // キャラの初期位置

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
      if (
        newPosition.x < X_PADDING ||
        newPosition.x > 100 - X_PADDING ||
        newPosition.y < Y_PADDING ||
        newPosition.y > 100 - Y_PADDING
      ) {
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
