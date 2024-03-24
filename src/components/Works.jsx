import { useState } from "react";
import { styled } from "styled-components";
import { ProjectCarousel } from "./ProjectCarousel";
import { HashtagButton } from "./HashtagButton";
import { BasicButton } from "./BasicButton";
import { Link } from "react-router-dom";
import { projects } from "../data";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export const Works = () => {
  const [projectRefsState, setProjectRefsState] = useState([]);

  const handleIntersection = (index) => (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setProjectRefsState((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }
    });
  };

  return (
    <>
      {projects.map((project, idx) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const produceRef = useIntersectionObserver(handleIntersection(idx), {
          rootMargin: "10px",
        });
        return (
          <Container
            key={idx}
            ref={produceRef}
            className={projectRefsState[idx] ? "opacity-animation" : ""}
          >
            <div className="title">
              <h3>{project.title}</h3>
              <div className="participation">{project.participation}</div>
            </div>
            <ProjectWrap>
              <ProjectImage>
                <div className="carousel">
                  <ProjectCarousel projectImages={project.images} />
                </div>
              </ProjectImage>
              <ProjectInfo>
                <div>
                  <p className="main-content">{project.mainContent}</p>
                </div>
                <div>
                  <hr />
                  <div className="hashtagButtons">
                    {project.tools.map((tool, idx) => {
                      return (
                        <span key={idx}>
                          <HashtagButton>{tool}</HashtagButton>
                        </span>
                      );
                    })}
                  </div>
                  <div className="shortcuts">
                    {project.site && (
                      <Link to={project.site} target="_blank">
                        <BasicButton
                          $backgdColor={"#8560b6"}
                          $fontColor={"#fff"}
                          $hoverColor={"#451485"}
                        >
                          사이트 바로가기
                        </BasicButton>
                      </Link>
                    )}
                    &nbsp;
                    {project.gitURL && (
                      <Link to={project.gitURL} target="_blank">
                        <BasicButton
                          $backgdColor={"#fff"}
                          $fontColor={"#000"}
                          $hoverColor={"#c0c0c0"}
                        >
                          GitHub
                        </BasicButton>
                      </Link>
                    )}
                  </div>
                </div>
              </ProjectInfo>
            </ProjectWrap>
          </Container>
        );
      })}
    </>
  );
};

const Container = styled.div`
  background-color: #0d0e13;
  width: 80%;
  height: 520px;
  margin: 0 auto;
  border-radius: 32px;
  margin-bottom: 120px;

  &.opacity-animation {
    animation: opacity 4s;

    @keyframes opacity {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    width: 99%;
    height: auto;
  }

  .title {
    text-align: center;
    h3 {
      color: #d9bcf8;
      font-size: 32px;
      padding-top: 16px;
    }
    .participation {
      color: #c0c0c0;
    }
  }

  hr {
    margin: 12px 12px 14px 0;
    background-color: #292929;
    height: 1px;
    border: 0;

    @media (max-width: 768px) {
      margin: 8px;
    }
  }

  .carousel {
    margin-left: 12px;

    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
`;

const ProjectWrap = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
  height: 360px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

const ProjectImage = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  &::-webkit-scrollbar {
    width: 10px; /* 스크롤바 너비 */
  }

  &::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바 길이 */
    background: #C5EDE2; /* 스크롤바 색상 */

    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1); /*스크롤바 배경색*/
  }

  .hashtagButtons {
    @media (max-width: 768px) {
      margin: 16px 16px;
    }
  }

  .shortcuts {
    display: flex;
    margin-top: 16px;

    @media (max-width: 768px) {
      margin: 16px 16px 24px 16px;
    }
  }

  .main-content {
    white-space: pre-line;
    margin-right: 12px;
    font-size: 15px;
    font-weight: 300;
    line-height: 27px;
    word-break: keep-all;

    @media (max-width: 768px) {
      margin-right: 0;
      padding: 16px;
    }
  }
`;
