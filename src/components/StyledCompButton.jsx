import React from "react";
import styled from "styled-components";
// Styled component named StyledButton
const StyledButton = styled.button`
  background-color: ${(props) => (props.bg === "black" ? "black" : "blue")};
  font-size: 32px;
  color: white;
`;

const StyledCompButton = () => {
  return (
    <>
      <StyledButton bg="black">Styled Button A</StyledButton>
      <StyledButton bg="blue">Styled Button B</StyledButton>
    </>
  );
};

export default React.memo(StyledCompButton);
