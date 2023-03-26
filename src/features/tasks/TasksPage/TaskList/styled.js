import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const alto = ({ theme }) => theme.color.alto;

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  word-break: break-word;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${alto};
  overflow: hidden;

  ${({ hidden }) =>
    hidden &&
    css`
      animation: hide 0.2s ease forwards;
      overflow: hidden;
      animation-delay: 0.4s;
    `};

  @keyframes hide {
    0% {
      opacity: 1;
      max-height: 245px;
      padding-top: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid ${alto};
    }

    100% {
      opacity: 0;
      max-height: 0;
      padding-top: 0;
      padding-bottom: 0;
      border-bottom: 0px solid ${alto};
    }
  }
`;

export const Button = styled.button`
  padding: 0;
  border: none;
  color: white;
  height: 30px;
  width: 30px;
  cursor: pointer;
  transition-duration: 0.2s;
  transition-property: background-color, filter;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: ${({ theme }) => theme.color.forestGreen};
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.color.alizarinCrimson};
    `}

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `};
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.teal};
  text-decoration: none;
  transition-duration: 0.2s;
  transition-property: filter;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;
