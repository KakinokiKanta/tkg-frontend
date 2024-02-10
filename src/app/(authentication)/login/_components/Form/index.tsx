"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import styles from "./Form.module.scss";

type Inputs = {
  id: string;
  password: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // TODO: バッグエンドにdataを送信
    reset(); // フォームに入力した値をリセット
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.content}>
        <label htmlFor="id" className={styles.label}>
          メールアドレス
        </label>
        <input
          id="id"
          {...register("id", {
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
        <p className={styles.validation}>{errors.id?.message}</p>
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
              message: "パスワードは必須でござるよ!!",
            },
          })}
          type="password"
          className={styles.input}
        />
        <p className={styles.validation}>{errors.password?.message}</p>
      </div>
      <button type="submit" className={styles.loginButton}>
        ログイン
      </button>
    </form>
  );
};
