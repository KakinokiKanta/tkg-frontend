import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import { LogoutButton } from "./LogoutButton";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/tkg_logo.png"
            alt="my logo"
            fill
            style={{
              objectFit: "cover",
            }}
            sizes="(max-width: 1000px) 175px, 250px"
          />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <LogoutButton />
              <Link href={"/signUp"} className={styles.link}>
                ヘルプ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
