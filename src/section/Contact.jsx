import { styled } from "styled-components";
import { MdEmail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { MdPhone } from "react-icons/md";
import { ContactButton } from "../components/ContactButton";

export const Contact = () => {
  return (
    <>
      <ContactContainer id="contactSection">
        <h2>CONTACT</h2>
        <div className="my-info">
          <div>
            <ContactButton
              title="연락처"
              detail="010.7129.1932"
              icon={<MdPhone />}
            ></ContactButton>
          </div>
          <div>
            <ContactButton
              title="이메일"
              detail="mijin950503@gmail.com"
              icon={<MdEmail />}
            ></ContactButton>
          </div>
          <div>
            <ContactButton
              title="GitHub"
              detail="github.com/wonmijin"
              icon={<AiFillGithub />}
              url="https://github.com/wonmijin"
            ></ContactButton>
          </div>
        </div>
      </ContactContainer>
    </>
  );
};

const ContactContainer = styled.section`
  width: 100%;
  height: 100%;
  color: white;
  background-color: #FFF4E4;
  padding: 30px 0 200px 0;

  h2 {
    color: #1d1d1d;
    font-size: 48px;
    text-align: center;
    margin: 100px 0 64px 0;
  }

  .my-info {
    margin: 0 auto;
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      height: auto;
      flex-direction: column;
      gap: 6px;
    }
  }
`;
