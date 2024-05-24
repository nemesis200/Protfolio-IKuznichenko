import gitIcon from "./gitHub-black.svg";

type Props = {
  link: string;
};
const BtnGitHab = ({ link }: Props) => {
  return (
    <a href={link} target="_blank" className="btn-outline" rel="noreferrer">
      <img src={gitIcon} alt="" />
      GitHub repo
    </a>
  );
};
export default BtnGitHab;
