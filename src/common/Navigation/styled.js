import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  list-style-type: none;
  margin: 20px;
  padding: 4px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 10px 20px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 44px;
  padding: 10px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 64px auto 64px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: auto auto;
  }
`;

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.color.royalBlue};
  border-bottom: 1px solid ${({ theme }) => theme.color.alto};
  box-shadow: 0 2px 6px rgba(186, 199, 213, 0.5);
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  transition-duration: 0.2s;
  transition-property: filter;

  &:hover {
    filter: brightness(120%);
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
  }

  &:active {
    filter: brightness(140%);
  }

  &.active {
    -webkit-text-stroke-width: 1px;
    border-bottom: 2px solid ${({ theme }) => theme.color.white};
  }
`;
