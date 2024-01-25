import styles from "./login.module.scss";

const Login = () => {
  return (
    <main>
      <section>
        <div className={styles.container}>
          <p>ID</p>
          <p>Password</p>
          <button>Login</button>
        </div>
      </section>
    </main>
  );
};

export default Login;
