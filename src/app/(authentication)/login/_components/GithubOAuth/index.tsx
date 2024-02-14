"use client";

import { useRouter } from "next/navigation";
import styles from "./GithubOAuth.module.scss";
import Image from "next/image";

export const GithubOAuth = () => {
  const router = useRouter();

  const handleClick = async () => {
    //TODO: Githubで認証
    console.log("githubでログイン");
  };

  return (
    <div className={styles.registerContainer}>
      <button onClick={handleClick} className={styles.registerButton}>
        <Image
          src="/github-mark-white.png"
          alt="GitHubアイコン"
          height={20}
          width={20}
        />
        GitHubでログイン
      </button>
    </div>
  );
};
