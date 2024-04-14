import { styled } from "styled-components";
import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import profileImage from "../assets/profile.jpg"

export const About = () => {

  const [dreamRefState, setDreamRefState] = useState(false);
  const [produceRefState, setProduceRefState] = useState(false);

  const dreamRef = useIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        setDreamRefState(entry.isIntersecting);
      });
    },
    { rootMargin: "-10px" }
  );

  const produceRef = useIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        setProduceRefState(entry.isIntersecting);
      });
    },
    { rootMargin: "-10px" }
  );

  return (
    <>
      <AboutContainer id="aboutSection">
        <div className="inBox">
          <div
            ref={dreamRef}
            className={`profile ${dreamRefState ? "opacity-animation" : ""}`}
          >
            <img src={profileImage} alt="프로필이미지" />
          </div>

          <div
            ref={produceRef}
            className={`profileText ${produceRefState ? "from-left-animation" : ""}`}
          >
            <div className="top">
              <h3>도전과 배움을 즐기는<br />프론트엔드 개발자 '원미진'입니다.</h3>
              <p>
                계속 발전하는 Framework처럼 발전 가능성이 풍부한 프론트엔드 개발자 원미진입니다.<br />
                항상 새로운 도전, 열정과 의지를 바탕으로 개발자로서 지속적인 성장을 이루어내겠습니다.<br />
                함께 성장하고 발전하는 여정을 함께 할 수 있는 곳을 찾습니다.
              </p>
            </div>

            <div className="bottom">
              <div className="left">
                <div className="textBox"> 
                  <h3>Profile</h3>
                  <div className="textInBox">
                    <div className="text">
                      <p>NAME</p>
                      <p>BIRTH</p>
                      <p>E-MAIL</p>
                      <p>PHONE</p>
                    </div>
                    <div className="text">
                      <p>원미진</p>
                      <p>1995.05.03</p>
                      <p>mijin950503@gmail.com</p>
                      <p>010.7129.1932</p>
                    </div>
                  </div>
                </div>
                <div className="textBox"> 
                  <h3>Education</h3>
                  <div className="textInBox">
                    <div className="text">
                      <p>2020 - 2021</p>
                      <p>2023 - 2024</p>
                    </div>
                    <div className="text">
                      <p>SBS 아카데미 퍼블리셔 과정 수료</p>
                      <p>제로베이스 프론트엔드개발자 과정 수료</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="textBox"> 
                  <h3>License</h3>
                  <div className="textInBox">
                    <div className="text">
                      <p>2021.05</p>
                      <p>2021.07</p>
                      <p>2021.09</p>
                    </div>
                    <div className="text">
                      <p>GTQ 일러스트 1급 취득</p>
                      <p>GTQ 그래픽기술자격 1급 취득</p>
                      <p>웹디자인기능사 취득</p>
                    </div>
                  </div>
                </div>
                <div className="textBox"> 
                  <h3>Career</h3>
                  <div className="textInBox">
                    <div className="text">
                      <p>2022.03 - 2023.03</p>
                    </div>
                    <div className="text">
                      <p>디아이커뮤니케이션즈 개발팀 퍼블리셔 근무</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AboutContainer>
    </>
  );
};

const AboutContainer = styled.section`
  background-color: #FFF4E4;
  width: 100%;

  .inBox {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: auto;
    padding: 150px 0;

    .profile {
      
      img {
        width: 280px;
        height: 360px;
      }

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
    }

    .profileText {
      color: #1d1d1d;
      line-height: 1.5;
      font-size: 20px;
      font-weight: 300;
      padding-left: 160px;

      &.from-left-animation {
        animation: fromLeft 2s;
        @keyframes fromLeft {
          0% {
            padding-left: 0;
          }
          100% {
            padding-left: 160px;
          }
        }
      }

      .top {
        margin-bottom: 50px;

        h3 {
          font-size: 25px;
          font-weight: 600;
          margin-bottom: 20px;
        }
      }

      .bottom {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;

        .left {
          margin-right: 30px;
        }

        .textBox {
          margin-bottom: 30px;

          h3 {
            font-size: 25px;
            font-weight: 600;
            margin-bottom: 20px;
          }

          .textInBox {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: flex-start;

            .text {
              margin-right: 20px;

              p {
                margin-bottom: 8px;

                &:last-child {
                  margin-bottom: 0;
                }
              }

              &:last-child {
                margin-right: 0;
              }
            }
          }
        }
      }
    }
  }

  


  @media (max-width: 768px) {
    .inBox {
      display: block;
      width: 80%;
      padding: 50px 0;

      .profile {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
      }

      .profileText {
        font-size: 14px;
        padding-left: 0;

        &.from-left-animation {
          animation: fromLeft 2s;
          @keyframes fromLeft {
            0% {
              padding-left: -20px;
            }
            100% {
              padding-left: 0;
            }
          }
        }

        .top {
          margin-bottom: 30px;

          h3 {
            font-size: 18px;
          }
        }

        .bottom {
          display: block;

          .left {
            margin: 0;
          }

          .textBox {
            h3 {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
`;