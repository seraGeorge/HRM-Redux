import React, { useState } from "react";
import SectionWrapper from "./mainHeading";
import Button from "../Button/Button.tsx";
import StyledLink from "../StyledLink.ts";
function MainHeading() {
  return (
    <SectionWrapper className="common-section">
      <h1 className="page-title">Employees</h1>
      <StyledLink to="employeeDetails">
        <Button icon="add_circle">Add New Employee</Button>
      </StyledLink>
    </SectionWrapper>
  );
}
export default MainHeading;
