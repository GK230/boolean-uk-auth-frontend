import React, { SyntheticEvent, useState } from "react";

const initialForm = {
  username: "",
  password: "",
};

export type UserCredentials = {
  username: string;
  password: string;
};

type LoginProps = {
  handleSubmit: (formData: { password: string; username: string }) => void;
};

export default function Login({ handleSubmit }: LoginProps) {
  const [loginForm, setLoginForm] = useState<UserCredentials>(initialForm);

  function handleChange(e: SyntheticEvent) {
    const { name, value } = e.target as HTMLInputElement;

    setLoginForm({ ...loginForm, [name]: value });
  }

  return (
    <form
      className="login-form"
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(loginForm);
      }}
    >
      <h2>Login here</h2>
      <label>
        Username
        <input onChange={handleChange} type="text" name="username" />
      </label>
      <label>
        Password
        <input onChange={handleChange} type="password" name="password" />
      </label>
      <input type="submit" value="Login" />
    </form>
  );
}
