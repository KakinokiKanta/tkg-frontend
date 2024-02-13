import { Form } from "./_components/Form";
import { Register } from "./_components/Register";
import { GithubOAuth } from "./_components/GithubOAuth";
import styles from "./login.module.scss";

const Login = () => {
  return (
    <main>
      <section>
        <div className={styles.container}>
          <h3 className={styles.h3}>TKG</h3>
          <p>TKGはホロライブの二次創作アプリです。</p>
          <p>
            GitHubのcontribution数に応じて、ホロライブのマスコットキャラクター達を育成することができます!!
          </p>
          {/* <h3 className={styles.h3}>ログイン</h3> */}
          {/* <Form /> */}
          <GithubOAuth />
          {/* <Register /> */}
        </div>
      </section>
    </main>
  );
};

export default Login;
