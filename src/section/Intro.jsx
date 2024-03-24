import { styled } from "styled-components";
import { BsChevronCompactDown } from "react-icons/bs";

export const Intro = () => {
  return (
    <IntroContainer id="introSection">
      <h1>Front-End Developer</h1>
      <h2>PORTFOLIO</h2>
      <ScrollDown>
        <p>Scroll</p>
        <div className="scroll-icons">
          <div>
            <BsChevronCompactDown />
          </div>
          <div>
            <BsChevronCompactDown />
          </div>
        </div>
      </ScrollDown>
    </IntroContainer>
  );
};

const IntroContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: #87C6BC;

  h1 {
    font-size: 72px;
    font-weight: 900;
    color: white;
  }
  h2 {
    color: #8560b6;
    letter-spacing: 18px;

  }

  @media (max-width: 768px) {
    h1 {
      font-size: 50px;
    }

    h2 {
      font-size: 16px;
      margin: 10px 0 0 12px;
    }
  }
`;

const ScrollDown = styled.div`
  color: white;
  text-align: center;
  position: absolute;
  bottom: 16px;
  font-size: 14px;

  .scroll-icons {
    font-size: 16px;

    div:nth-child(1) {
      animation: scrolldown 1300ms 650ms linear infinite;
      animation-fill-mode: backwards;
      margin-top: 12px;
    }
    div:nth-child(2) {
      animation: scrolldown 1300ms linear infinite;
      margin-top: -10px;
    }
  }

  @keyframes scrolldown {
    0% {
      top: 18px;
      opacity: 0;
    }
    50% {
      top: 35px;
      opacity: 0.5;
    }
    100% {
      top: 50px;
      opacity: 0;
    }
  }
`;
