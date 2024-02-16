import { Form } from "./_components/Form";
import { GithubOAuth } from "../login/_components/GithubOAuth";
import styles from "./signUp.module.scss";

const SignUp = () => {
  return (
    <main>
      <section>
        <div className={styles.container}>
          <h3 className={styles.h3}>新規登録</h3>
          <Form />
        </div>
      </section>
    </main>
  );
};

export default SignUp;
