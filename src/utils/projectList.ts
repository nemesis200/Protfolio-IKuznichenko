import project01 from "./../img/projects/01.jpg";
import project01Big from "./../img/projects/01-big.jpg";
import project02 from "./../img/projects/02.jpg";
import project02Big from "./../img/projects/02-big.jpg";
import project03 from "./../img/projects/03.jpg";
import project03Big from "./../img/projects/03-big.jpg";
import project04 from "./../img/projects/04.jpg";
import project04Big from "./../img/projects/04-big.jpg";
import project05 from "./../img/projects/05.jpg";
import project05Big from "./../img/projects/05-big.jpg";
import project06 from "./../img/projects/06.jpg";
import project06Big from "./../img/projects/06-big.jpg";

export type ProjectType = {
  id: number;
  title: string;
  skills: string;
  img: string;
  imgBig: string;
  gitHubLink?: string;
};



export const projects: ProjectType[] = [
  {
    id: 0,
    title: "Gaming  portal",
    skills: "React , Node.js",
    img: project01,
    imgBig: project01Big,
    gitHubLink: 'https://github.com/',
  },
  {
    id:1,
    title: "Video Service",
    skills: "React",
    img: project02,
    imgBig: project02Big,
    gitHubLink: 'https://github.com/',
  },
  {
    id: 2,
    title: "Video portal",
    skills: "React ",
    img: project03,
    imgBig: project03Big,
    gitHubLink: 'https://github.com/',
  },
  {
    id: 3,
    title: "Dating app",
    skills: "React , Node.js",
    img: project04,
    imgBig: project04Big,
  },
  {
    id: 4,
    title: "Landing",
    skills: "HTML, SCSS, JS",
    img: project05,
    imgBig: project05Big,
  },
  {
    id: 5,
    title: "Gaming community",
    skills: "React ",
    img: project06,
    imgBig: project06Big,
  },
];

