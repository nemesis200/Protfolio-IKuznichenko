import { NavLink } from "react-router-dom";
import heart from "./../../img/icons/heart .png";
import heartIsAktive from "./../../img/icons/heartIsAktive.png";

import "./style.css";
type Props = {
  title: string;
  img: string;
  index: number;
  isLiked: boolean;
  toggleLike: (index: number) => void;
};

const Project = ({ title, img, index, isLiked, toggleLike }: Props) => {
  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleLike(index);
  };

  return (
    <li className="project">
      <NavLink to={`/project/${index}`}>
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </NavLink>
      <button className="like-button" onClick={handleLikeClick}>
        <img
          src={isLiked ? heart : heartIsAktive}
          alt="like"
          className="like-icon"
        />
      </button>
    </li>
  );
};

export default Project;
