import { styled } from "styled-components";

export const ContactButton = ({ title, detail, icon, url }) => {
  const handleEmailSend = (email) => {
    const mailtoLink = `mailto:${email}}`;
    window.location.href = mailtoLink;
  };

  const handleLink = (url) => {
    if (title === '이메일') {
      handleEmailSend("mijin950503@gmail.com");
      return;
    } else if (title === '연락처') {
      return;
    }

    window.open(url);
  };

  return (
    <div onClick={() => handleLink(url)}>
      <MyInfo>
        <h3>
          <span>{icon}</span>
          {title}
        </h3>
        <p>{detail}</p>
      </MyInfo>
    </div>
  );
};

const MyInfo = styled.div`
  min-width: 200px;
  height: 90px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #1d1d1d;
  margin: 0 4px;
  cursor: pointer;

  background-color: #faf6ff;
  border: 4px solid #87C6BC;
  border-radius: 12px;
  transition: all 0.4s;

  &:hover {
    background-color: #87C6BC;
    color: white;
  }

  span {
    font-size: 18px;
    margin-right: 4px;
  }

  p {
    font-size: 14px;
    margin-top: 8px;

    @media (max-width: 860px) {
      font-size: 18px;
      margin-top: 2px;
    }
  }
`;
