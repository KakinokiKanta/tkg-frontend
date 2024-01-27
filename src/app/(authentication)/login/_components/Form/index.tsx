"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import styles from "./Form.module.scss";

type Inputs = {
  id: number;
  password: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.content}>
        <label htmlFor="id" className={styles.label}>
          ID
        </label>
        <input id="id" {...register("id")} className={styles.input} />
      </div>
      <div className={styles.content}>
        <label htmlFor="password" className={styles.label}>
          パスワード
        </label>
        <input
          id="password"
          {...register("password")}
          type="password"
          className={styles.input}
        />
      </div>
      <button type="submit" className={styles.loginButton}>
        ログイン
      </button>
    </form>
  );
};