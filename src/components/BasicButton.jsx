import { styled } from "styled-components";

export const BasicButton = ({
  children,
  $fontColor,
  $backgdColor,
  $hoverColor,
}) => {
  return (
    <>
      <Button
        $fontColor={$fontColor}
        $backgdColor={$backgdColor}
        $hoverColor={$hoverColor}
      >
        {children}
      </Button>
    </>
  );
};

const Button = styled.button`
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  color: ${(props) => props.$fontColor};
  background-color: ${(props) => props.$backgdColor};
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    transition: all 0.4s;
    background-color: ${(props) => props.$hoverColor};
  }
`;
