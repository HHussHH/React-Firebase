import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { setUser } from "../../store/slices/userSlice";
// import { useState } from "react";
// import "./registerForm.scss";
// import { Link } from "react-router-dom";

// const RegisterForm = () => {
//   const [name, setName] = useState("");
//   const [mail, setMail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const user = {
//       name,
//       mail,
//       password,
//     };
//     console.log(user);
//   };
//   return (
//     <form className="form" onSubmit={handleSubmit}>
//       <h2 className="form__title">Введите ваше имя:</h2>
//       <input
//         className="form__input"
//         type="text"
//         placeholder="Нариман"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <h2 className="form__title">Введите вашу почту:</h2>
//       <input
//         className="form__input"
//         type="email"
//         placeholder="nariman@mail.ru"
//         value={mail}
//         onChange={(e) => setMail(e.target.value)}
//       />
//       <h2 className="form__title">Введите вашу почту:</h2>
//       <input
//         className="form__input"
//         type="password"
//         placeholder="12345"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <input className="form__submit" type="submit" />
//       <p>
//         Уже есть аккаунт?<Link to="/login">Войти</Link>
//       </p>
//     </form>
//   );
// };

// export default RegisterForm;

const RegisterForm = () => {
  const dispatch = useDispatch();
  const push = useNavigate();
  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        push("/");
      })
      .catch(console.error);
  };
  return <Form title="Register" handleClick={handleRegister} />;
};

export default RegisterForm;
