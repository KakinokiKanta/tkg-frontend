import Image from "next/image";
import Link from "next/link";
import { authOptions } from "@/lib/next-auth/authOptions";
import { getServerSession } from "next-auth";
import styles from "./page.module.scss";
import { redirect } from "next/navigation";

const Top = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log(user?.accessToken);
  if (user) {
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
  } else {
    redirect("/login");
  }
};

export default Top;
