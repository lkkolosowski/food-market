import styled from "styled-components";

export const ButtonsGroup = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    flex-direction: column;
    margin-top: 20px;
    margin-left: -20px;
    margin-right: -20px;
    padding-left: 20px;
    padding-right: 20px;
    border-top: 1px solid ${({ theme }) => theme.color.alto};
  }
`;

export const Button = styled.button`
  padding: 0;
  margin: 0;
  border: 0;
  color: ${({ theme }) => theme.color.teal};
  background-color: transparent;
  cursor: pointer;
  transition-duration: 0.2s;
  transition-property: color, filter;
  margin: 0 0 0 30px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin: 20px 0 0 0;
  }

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.alto};
    pointer-events: none;
  }
`;
