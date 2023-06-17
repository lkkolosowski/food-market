import styled from "styled-components";
import { ReactComponent as CrossIcon } from "../../../../../images/cross.svg";

export const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  z-index: 40;
  margin: 0 auto;
  box-shadow: 0 2px 6px rgba(186, 199, 213, 0.5);
  margin-top: 38px;
  text-align: center;
  width: calc(100% - 60px);
`;

export const Scroll = styled.div`
  overflow-y: scroll;
  max-height: 375px;
`;

export const StyledSearchList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  justify-items: center;
  margin: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
`;

export const Item = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-content: space-between;
  padding: 10px 0;
  grid-gap: 10px;

  &:hover {
    box-shadow: 0 2px 6px rgba(186, 199, 213, 0.5);
  }
`;

export const Image = styled.img`
  height: 120px;
  aspect-ratio: 1;
  display: block;
  object-fit: contain;
  pointer-events: none;
  padding: 8px;
  margin: 0 auto;
`;

export const Remove = styled.button`
  position: absolute;
  right: 2px;
  top: -36px;
  opacity: 1;
  cursor: pointer;
  padding: 0;
  border: 0;
  background-color: white;
  text-align: center;
  line-height: 1;
  color: white;
  user-select: none;
  width: 34px;
  height: 34px;
  z-index: 90;

  &:hover {
    opacity: 0.6;
  }
`;

export const Cross = styled(CrossIcon)`
  height: 16px;
  width: auto;
  margin-bottom: -3px;
`;
