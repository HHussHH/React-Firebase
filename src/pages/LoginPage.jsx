import React from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../components/form/LoginForm";
import "./form.scss";

const LoginPage = () => {
  return (
    <div className="form">
      <h1 className="form__title">Авторизация</h1>
      <LoginForm />
      <p className="form__link">
        У вас ещет нет Аккаунта? <Link to="/register">Зарегистрироваться</Link>
      </p>
    </div>
  );
};

export default LoginPage;
