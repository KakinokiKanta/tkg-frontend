"use client";

import { useRouter } from "next/navigation";
import styles from "./GithubOAuth.module.scss";

export const GithubOAuth = () => {
  const router = useRouter();

  const handleClick = () => {
    //TODO: Githubで認証
    console.log("githubでログイン");
  };

  return (
    <div className={styles.registerContainer}>
      <button onClick={handleClick} className={styles.registerButton}>
        GitHubアカウントでログイン
      </button>
    </div>
  );
};
