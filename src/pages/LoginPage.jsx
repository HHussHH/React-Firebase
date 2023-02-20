import React from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../components/form/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
      <p>
        Или <Link to="/register">Зарегистрируйся</Link>
      </p>
    </div>
  );
};

export default LoginPage;
