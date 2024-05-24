import "./Header.css";
type Props = {};
const Header = (props: Props) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Ivan</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="/resume.pdf" className="btn" download>
          Download CV
        </a>
      </div>
    </header>
  );
};
export default Header;
