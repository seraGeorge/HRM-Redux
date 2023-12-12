import { useState } from "react";
import { Employee } from "../../../../core/interfaces/interface";
import SkillsChip from "../../../../components/Skills/SkillsChip";
import StyledLink from "../../../../components/StyledLink";
import Button from "../../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Tooltip from "./../../../../components/Tooltip/Tooltip.tsx";
import CardWrapper from "./Card.ts";
import DummyImage from "../../../../assets/DummyUser.svg";

const Card = ({
  employee,
  changeDltModalOpenStatus,
  idToDltProp,
}: {
  employee: Employee;
  changeDltModalOpenStatus: () => void;
  idToDltProp: {
    idToDlt: string;
    addIdToDlt: (idToDlt: string) => void;
  };
}) => {
  const navigate = useNavigate();
  const handleEmployeeDetailsView = () => {
    navigate(`/view-employee?employeeId=${employee.id}`);
  };

  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleCancelBtn = () => {
    changeDltModalOpenStatus();
    idToDltProp.addIdToDlt(employee.id); //id is set to have the employee of that id to be deleted inside the delete modal
  };

  const [skillsOverflow, setSkillsOverflow] = useState(false);
  const handleSkillsOverflow = (isOverflow: boolean) => {
    setSkillsOverflow(isOverflow);
  };
  return (
    <CardWrapper>
      <img src={DummyImage} alt="Dummy image" />
      <p>{employee.id}</p>
      <p onClick={handleEmployeeDetailsView}>{employee.emp_name}</p>
      <p>{employee.designation}</p>
      <p>{employee.department}</p>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <SkillsChip
          className="overflow-ellipsis"
          skills={employee.skills}
          handleSkillsOverflow={handleSkillsOverflow}
        />
        {hover && skillsOverflow && <Tooltip message={employee.skills} />}
      </div>
      <div className=" actions-list common-flex">
        {/* navigating to edit employee page */}
        <StyledLink to={`/edit-employee?employeeId=${employee.id}`}>
          <Button icon="edit"></Button>
        </StyledLink>
        {/* opens the modal on click */}
        <Button icon="delete" onClick={handleCancelBtn}></Button>
      </div>
    </CardWrapper>
  );
};

export default Card;
