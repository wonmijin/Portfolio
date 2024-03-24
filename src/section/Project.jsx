import { styled } from "styled-components";
import { Works } from "../components/Works";

export const Project = () => {
  return (
    <>
      <ProjectContainer id="projectSection">
        <h2>PROJECT</h2>
        <Works />
      </ProjectContainer>
    </>
  );
};

const ProjectContainer = styled.section`
  width: 100%;
  height: 100%;
  color: white;

  h2 {
    color: #ffffff;
    font-size: 48px;
    text-align: center;
    margin: 100px 0 64px 0;
  }
`;
