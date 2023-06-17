import styled, { css } from "styled-components";

const StyledBackdrop = styled.div`
  position: absolute;
  background-color: #00000080;
  inset: 0;
  z-index: 38;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s linear, opacity 0.3s linear;

  ${({ visible }) =>
    visible &&
    css`
      visibility: visible;
      opacity: 1;
    `};
`;

export default StyledBackdrop;
