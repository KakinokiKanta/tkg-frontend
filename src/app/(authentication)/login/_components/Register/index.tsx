"use client";

import { useRouter } from "next/navigation";
import styles from "./Register.module.scss";

export const Register = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/signUp");
  };

  return (
    <div className={styles.registerContainer}>
      <button onClick={handleClick} className={styles.registerButton}>
        新規登録
      </button>
    </div>
  );
};
