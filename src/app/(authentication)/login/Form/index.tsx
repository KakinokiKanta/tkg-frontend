"use client";

import { useForm, SubmitHandler } from "react-hook-form";
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

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID</label>
        <input id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">パスワード</label>
        <input id="password" {...register("password")} type="password" />
      </div>
      <button type="submit">ログイン</button>
    </form>
  );
};
