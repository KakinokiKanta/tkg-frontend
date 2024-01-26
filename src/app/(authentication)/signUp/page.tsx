import { Form } from "./Form";
import styles from "./signUp.module.scss";

const SignUp = () => {
  return (
    <main>
      <section>
        <div className={styles.container}>
          <h3 className={styles.h3}>ログイン</h3>
          <Form />
        </div>
      </section>
    </main>
  );
};

export default SignUp;
