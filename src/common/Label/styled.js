import styled, { css } from "styled-components";

export const StyledLabel = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  border-radius: 12px;
  margin-left: 4px;
  padding: 2px 7px;
  border: 0;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `}

  ${({ variant }) => {
    switch (variant) {
      case "kcal":
        return css`
          background-color: #ede0db;
        `;
      case "g/100g":
        return css`
          background-color: #dff4ff;
        `;
      case "-":
        return css`
          background-color: #ef7d00;
          margin-left: 0;
          margin-right: 8px;
          font-size: 1rem;
          height: 23px;
          aspect-ratio: 1;
          user-select: none;
          color: ${({ theme }) => theme.color.white};
          cursor: pointer;
          &:hover {
            opacity: 0.6;
          }
          @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            margin-right: 4px;
            aspect-ratio: unset;
            padding: 2px;
            width: 14px;
          }
        `;
      case "+":
        return css`
          background-color: #87bd25;
          margin-left: 8px;
          font-size: 1rem;
          height: 23px;
          aspect-ratio: 1;
          user-select: none;
          color: ${({ theme }) => theme.color.white};
          cursor: pointer;
          &:hover {
            opacity: 0.6;
          }
          @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            margin-left: 4px;
            aspect-ratio: unset;
            padding: 2px;
            width: 14px;
          }
        `;
      case "productName":
        return css`
          display: block;
          margin-left: 8px;
          margin-right: 8px;
        `;
      case "skeletonProductName":
        return css`
          background-color: #eeedef;
          display: block;
          height: 8px;
          margin: 5px auto;
          border-radius: unset;
          background: linear-gradient(
            120deg,
            #eeedef 30%,
            #fdfdfd 38%,
            #fdfdfd 40%,
            #eeedef 48%
          );
          background-size: 200% 100%;
          background-position: 100% 0;

          animation: skeleton-loading 1s linear infinite;
        `;
      case "productCode":
        return css`
          margin-left: 8px;
          margin-right: 8px;
          display: block;
        `;
      case "button":
        return css`
          background-color: #008c8c;
          color: ${({ theme }) => theme.color.white};
          margin-left: 8px;
          margin-right: 8px;
          padding: 5px 14px;
          cursor: pointer;
          user-select: none;
          margin-bottom: 10px;

          &:hover {
            opacity: 0.8;
          }
        `;
      case "skeletonButton":
        return css`
          background-color: #eeedef;
          margin-left: 8px;
          margin-right: 8px;
          padding: 5px 14px;
          margin-bottom: 10px;
          width: 60%;
          height: 22px;
          background: linear-gradient(
            120deg,
            #eeedef 30%,
            #fdfdfd 38%,
            #fdfdfd 40%,
            #eeedef 48%
          );
          background-size: 200% 100%;
          background-position: 100% 0;

          animation: skeleton-loading 1s linear infinite;
        `;
      default:
        return css`
          background-color: transparent;
          padding: 2px 0;
        `;
    }
  }};
  @keyframes skeleton-loading {
    100% {
      background-position: -100% 0;
    }
  }
`;
