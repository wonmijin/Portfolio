import { styled } from "styled-components";

export const GradientButton = (props) => {
  return <GradientBtn>{props.children}</GradientBtn>;
};

const GradientBtn = styled.div`
  width: 170px;
  padding: 8px;
  text-align: center;
  transition: 0.4s;
  background-size: 200% auto;
  color: white;
  font-size: 20px;
  box-shadow: 0 0 20px #87C6BC;
  border-radius: 10px;
  background-image: linear-gradient(
    to right,
    #87C6BC 0%,
    #00adc1 51%,
    #8560b6 100%
  );

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    box-sizing: border-box;
  }

  &:hover {
    background-position: right center;
  }
`;
