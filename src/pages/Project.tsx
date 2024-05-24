import { useParams } from "react-router-dom";
import BtnGitHab from "../components/btnGitHub/BtnGitHab";
import { projects } from "../utils/projectList";

type Props = { isLiked?: boolean };

const Project = ({ isLiked = false }: Props) => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id || "", 10));

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project!.title}</h1>

          <img
            src={project!.imgBig}
            alt=""
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project!.skills}</p>
          </div>
          {project!.gitHubLink && <BtnGitHab link={project!.gitHubLink} />}
        </div>
      </div>
    </main>
  );
};

export default Project;
