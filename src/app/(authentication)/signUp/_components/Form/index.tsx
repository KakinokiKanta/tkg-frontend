"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import styles from "./Form.module.scss";

type Inputs = {
  id: number;
  mail: string;
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
    // TODO: バッグエンドにdataを送信
    reset(); // フォームに入力した値をリセット
    router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.content}>
        <label htmlFor="mail" className={styles.label}>
          メールアドレス
        </label>
        <input
          id="mail"
          {...register("mail", {
            required: {
              value: true,
              message: "メールは必須でござるよ!!",
            },
            pattern: {
              value:
                /^[A-Za-z0-9_.+-]+@([A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]*\.)+[A-Za-z]{2,}$/,
              message: "メール形式と違うでござるよ!!",
            },
          })}
          className={styles.input}
        />
        <p className={styles.validation}>{errors.mail?.message}</p>
      </div>
      <div className={styles.content}>
        <label htmlFor="id" className={styles.label}>
          GitHub ID
        </label>
        <input
          id="id"
          {...register("id", {
            required: {
              value: true,
              message: "GitHub IDは必須でござるよ!!",
            },
          })}
          className={styles.input}
        />
      </div>
      <div className={styles.content}>
        <label htmlFor="password" className={styles.label}>
          パスワード
        </label>
        <input
          id="password"
          {...register("password", {
            required: {
              value: true,
              message: "パスワードの登録は必須でござるよ!!",
            },
            pattern: {
              value: /^[A-Za-z0-9]+$/,
              message: "パスワードは英数字のみでござるよ!!",
            },
          })}
          type="password"
          className={styles.input}
        />
      </div>
      <div className={styles.content}>
        <label htmlFor="passwordCheck" className={styles.label}>
          パスワード確認
        </label>
        <input
          id="passwordCheck"
          {...register("password", {
            required: {
              value: true,
              message: "パスワードの確認は必須でござるよ!!",
            },
            pattern: {
              value:
                /^[A-Za-z0-9_.+-]+@([A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]*\.)+[A-Za-z]{2,}$/,
              message: "メール形式と違うでござるよ!!",
            },
          })}
          type="password"
          className={styles.input}
        />
      </div>
      <button type="submit" className={styles.loginButton}>
        登録
      </button>
    </form>
  );
};
