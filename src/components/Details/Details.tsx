import { Skill } from "../../core/interfaces/interface";
import SkillsChip from "../Skills/SkillsChip";
import DetailsWrapper from "./details";

const DetailsSection = ({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: string | Skill[];
}) => {
  return (
    <DetailsWrapper className="common-flex">
      <div className="heading common-flex">
        <span className="material-symbols-outlined ">{icon}</span>
        <p className="title">{title}</p>
      </div>
      {(typeof content === "string") ? <p className="content">{content}</p> :
        <SkillsChip skills={content} />}
    </DetailsWrapper>
  );
};

export default DetailsSection;
