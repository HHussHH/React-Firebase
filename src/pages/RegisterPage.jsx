import { Link } from "react-router-dom";
import RegisterForm from "../components/form/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="form">
      <h1 className="form__title">Регистрация</h1>
      <RegisterForm />
      <p className="form__link">
        У вас уже есть аккаунт?{<Link to="/login"> Войти</Link>}
      </p>
    </div>
  );
};

export default RegisterPage;
