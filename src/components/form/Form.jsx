import { useState } from "react";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <input
        className="form__input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Введите вашу почту"
      />
      <input
        className="form__input"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Введите ваш пароль"
      />

      <button className="form__btn" onClick={() => handleClick(email, pass)}>
        {title}
      </button>
    </div>
  );
};

export { Form };
