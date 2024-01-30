import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

const Top = () => {
  return (
    <div className={styles.window}>
      <div className={styles.titleFrame}>
        <Image
          src={"/tkg_logo.png"}
          alt="TKGのロゴ"
          fill
          style={{ objectFit: "cover" }}
          className={styles.titleImg}
        />
      </div>
      <div className={styles.grid}>
        <Link href={"/character"} className={styles.card}>
          育成
        </Link>
        <Link href={"/"} className={styles.card}>
          コレクション
        </Link>
        <Link href={"/"} className={styles.card}>
          ランキング
        </Link>
      </div>
    </div>
  );
};

export default Top;
