import { Link } from "react-router-dom";
import RegisterForm from "../components/form/RegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <RegisterForm />
      <p>У вас уже есть аккаунт?{<Link to="/login">Войти</Link>}</p>
    </div>
  );
};

export default RegisterPage;
