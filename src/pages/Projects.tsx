import { useEffect, useState } from "react";
import Project from "../components/project/Project";
import { projects } from "../utils/projectList";
import lArrow from "./../img/icons/left-arrow.png";
import rArrow from "./../img/icons/right-arrow.png";

type Props = {};

const Projects = (prop: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLiked, setShowLiked] = useState(false);
  const projectsPerPage = 3;

  const initializeLikes = () => {
    const savedLikes = localStorage.getItem("likedProjects");
    return savedLikes
      ? JSON.parse(savedLikes)
      : Array(projects.length).fill(false);
  };

  const [likedProjects, setLikedProjects] =
    useState<boolean[]>(initializeLikes);

  useEffect(() => {
    localStorage.setItem("likedProjects", JSON.stringify(likedProjects));
  }, [likedProjects]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalPages - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalPages - 1
    );
  };

  const toggleLike = (index: number) => {
    setLikedProjects((prevLikedProjects) => {
      const newLikedProjects = [...prevLikedProjects];
      newLikedProjects[index] = !newLikedProjects[index];
      return newLikedProjects;
    });
  };

  const filteredProjects = showLiked
    ? projects.filter((_, index) => likedProjects[index])
    : projects;

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const start = currentIndex * projectsPerPage;
  const end = start + projectsPerPage;
  const displayedProjects = filteredProjects.slice(start, end);

  return (
    <>
      <h2 className="title-1">Projects</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <button
          onClick={() => setShowLiked(false)}
          style={{ color: "var(--title-1)", fontSize: "20px" }}
        >
          All
        </button>
        <button
          onClick={() => setShowLiked(true)}
          style={{ color: "var(--title-1)", fontSize: "20px" }}
        >
          Liked
        </button>
      </div>

      <div
        className="projects-container"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <button onClick={handlePrev}>
          <img
            src={lArrow}
            alt=""
            style={{
              width: "2.5rem",
            }}
          />
        </button>
        {displayedProjects.map((project, index) => (
          <div
            className="project-item"
            key={index}
            style={{ listStyleType: "none" }}
          >
            <Project
              title={project.title}
              img={project.img}
              index={projects.indexOf(project)}
              isLiked={likedProjects[projects.indexOf(project)]}
              toggleLike={toggleLike}
            />
          </div>
        ))}
        <button onClick={handleNext}>
          <img
            src={rArrow}
            alt=""
            style={{
              width: "2.5rem",
            }}
          />
        </button>
      </div>
    </>
  );
};

export default Projects;
