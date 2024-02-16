"use client";

import Link from "next/link";
import styles from "./LogoutButton.module.scss";
import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  return (
    <Link href={"/login"} className={styles.link} onClick={() => signOut()}>
      ログアウト
    </Link>
  );
};
