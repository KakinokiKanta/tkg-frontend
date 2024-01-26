import { Form } from "./Form";
import { Register } from "./Register";
import styles from "./login.module.scss";

const Login = () => {
  return (
    <main>
      <section>
        <div className={styles.container}>
          <h3 className={styles.h3}>ログイン</h3>
          <Form />
          <Register />
        </div>
      </section>
    </main>
  );
};

export default Login;
