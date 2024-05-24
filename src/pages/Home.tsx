import Header from "../components/header/Header";

type Props = {};
const Home = (props: Props) => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, HTML, CSS, BootStrap,
                MaterialUI, TailwindCSS, StyledComponents
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};
export default Home;
