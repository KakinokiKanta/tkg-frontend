import { Form } from "@/components/Form";
import styles from "./login.module.scss";

const Login = () => {
  return (
    <main>
      <section>
        <div className={styles.container}>
          <h3>ログイン</h3>
          <Form />
        </div>
      </section>
    </main>
  );
};

export default Login;
