"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export const useAnimationRestless = () => {
  const requestIdRef = useRef<number>(0);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const X_MAX = 3;
  const Y_MAX = 3;

  // キャラ移動の方向を決める関数
  const getRandomDirection = () => {
    const xDirection = Math.random() * X_MAX * 2 - X_MAX;
    const yDirection = Math.random() * Y_MAX * 2 - Y_MAX;
    return { x: xDirection, y: yDirection };
  };

  const updatePosition = useCallback(() => {
    setPosition((position) => {
      const move = getRandomDirection();
      const nextX =
        position.x + move.x < 10 || 90 < position.x + move.x
          ? position.x
          : position.x + move.x;
      const nextY =
        position.y + move.y < 10 || 90 < position.y + move.y
          ? position.y
          : position.y + move.y;

      return {
        x: nextX,
        y: nextY,
      };
    });
    requestIdRef.current = requestAnimationFrame(updatePosition);
  }, []);

  useEffect(() => {
    updatePosition();

    return () => cancelAnimationFrame(requestIdRef.current);
  }, [updatePosition]);

  return { ...position };
};
