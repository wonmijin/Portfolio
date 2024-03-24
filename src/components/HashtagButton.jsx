import { styled } from "styled-components";

export const HashtagButton = ({ children }) => {
  return (
    <>
      <HashtagButtonContainer># {children}</HashtagButtonContainer>
    </>
  );
};

const HashtagButtonContainer = styled.div`
  color: #cbcbcb;
  font-size: 13px;
  display: inline-block;
  padding: 2px 8px;
  border-radius: 30px;
  border: 1px solid #313131;
  box-shadow: 1px 0px 5px 0px #47386d;
  background-color: #0f0f0f;
`;
