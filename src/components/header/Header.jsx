import "./header.scss";

const linkToReact = (text) => {
  return (
    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
      {text}
    </a>
  );
};
const linkToFireBase = (text) => {
  return (
    <a
      href="https://firebase.google.com/docs?hl=ru"
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Регистрация</h1>
      <h2 className="header__subtitle">
        {linkToReact("React")} | {linkToFireBase("Firebase")}
      </h2>
    </header>
  );
};

export default Header;
