import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { ReactComponent as CrossIcon } from "../../../../images/cross.svg";
import { ReactComponent as PackagingIcon } from "../../../../images/packaging.svg";

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
      max-height: 51px;
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
  color: ${({ theme }) => theme.color.royalBlue};
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

export const Fridge = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 0.8rem;
  }
`;

export const Product = styled.tr``;

export const HeaderCell = styled.th`
  ${({ noTablet }) =>
    noTablet &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        display: none;
      }
    `};

  ${({ noMobile }) =>
    noMobile &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: none;
      }
    `};
`;

export const Cell = styled.td`
  border: 2px solid #eeedef;
  text-align: center;
  padding: 0 8px;
  width: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    width: auto;
      }

  ${({ productName }) =>
    productName &&
    css`
      width: auto;
    `}

  ${({ remove }) =>
    remove &&
    css`
      width: 20px;
    `}

    ${({ blank }) =>
    blank &&
    css`
      width: 20px;
      border: none;
      padding: 0;
    `}

  ${({ withImage }) =>
    withImage &&
    css`
      padding: 0;
      width: 120px;

      @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        width: 20px;
      }
    `}

  ${({ barcode }) =>
    barcode &&
    css`
      width: auto;
    `}

    ${({ noTablet }) =>
    noTablet &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        display: none;
      }
    `};

  ${({ noMobile }) =>
    noMobile &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: none;
      }
    `};
`;

export const CellInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  display: block;
  object-fit: contain;
  pointer-events: none;
  padding: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 4px;
  }
`;

export const Remove = styled.button`
  opacity: 0.6;
  cursor: pointer;
  padding: 0;
  border: 0;
  background-color: white;
  text-align: center;
  line-height: 20px;
  color: white;
  user-select: none;

  &:hover {
    opacity: 1;
  }
`;

export const Paragraph = styled.p`
  max-width: 675px;
  line-height: 1.5;

  ${({ small }) =>
    small &&
    css`
      font-size: 0.7rem;
      letter-spacing: 1px;
    `};
`;

export const Cross = styled(CrossIcon)`
  height: 16px;
  width: auto;
  margin-bottom: -3px;
`;

export const Packaging = styled(PackagingIcon)`
  height: auto;
  width: 100%;
  margin: 0 auto;
`;
