import { useState, useEffect } from "react";
import sun from "./sun.svg";
import moon from "./moon.svg";
import "./style.css";

type Props = {};
const BtnDarkMoud = (props: Props) => {
  const [darkMoude, setDarkMoud] = useState("light");

  useEffect(() => {
    if (darkMoude === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMoude]);

  const toggleDarkMoud = () => {
    setDarkMoud((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };
  const btnNormal = "dark-mode-btn";
  const btnActive = "dark-mode-btn dark-mode-btn--active";
  return (
    <button
      className={darkMoude === "dark" ? btnActive : btnNormal}
      onClick={toggleDarkMoud}
    >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};
export default BtnDarkMoud;
