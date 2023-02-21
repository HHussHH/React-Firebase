import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/use-auth";
import cat from "../img/catGif.gif";
import { removeUser } from "../store/slices/userSlice";
import "./home.scss";
const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div className="home">
      <h1 className="home__title">Вы находитесь на главной странице</h1>

      <img className="home__img" src={cat} alt="" />
      <button className="home__btn" onClick={() => dispatch(removeUser())}>
        Выйти из аккаунта {email}
      </button>
    </div>
  ) : (
    <Navigate to="login" />
  );
};

export default HomePage;
