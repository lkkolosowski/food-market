import styled, { css } from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  padding: 20px 10px 0;

  ${({ trimmed }) =>
    trimmed &&
    css`
      padding: 0 10px;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 0;
      }
    `};

  ${({ page }) =>
    page &&
    css`
      min-height: calc(100vh - 121px);
    `};

  ${({ products }) =>
    products &&
    css`
      animation: revealFromLeft 0.4s ease forwards;
    `};

  ${({ author }) =>
    author &&
    css`
      animation: revealFromRight 0.4s ease forwards;
    `};

  @keyframes revealFromLeft {
    0% {
      opacity: 0;
      transform: translateX(-50%);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes revealFromRight {
    0% {
      opacity: 0;
      transform: translateX(50%);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
