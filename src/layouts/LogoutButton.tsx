"use client";

import Link from "next/link";
import styles from "./LogoutButton.module.scss";
import { signOut, useSession } from "next-auth/react";

export const LogoutButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <Link href={"/login"} className={styles.link} onClick={() => signOut()}>
        ログアウト
      </Link>
    );
  }
};
