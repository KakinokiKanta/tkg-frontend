"use client";

import styles from "./Form.module.scss";

export const Form = () => {
  const handleSubmit = async () => {
    const result = await console.log("login!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>ID : </p>

      <p>パスワード : </p>
      <button>ログイン</button>
    </form>
  );
};
