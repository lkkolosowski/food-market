import styled, { css } from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ReactComponent as CrossIcon } from "../../../../images/cross.svg";
import { ReactComponent as PackagingIcon } from "../../../../images/packaging.svg";
import "react-lazy-load-image-component/src/effects/blur.css";

export const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  z-index: 40;
  margin: 0 auto;
  box-shadow: 0 2px 6px rgba(186, 199, 213, 0.5);
  text-align: center;
  width: calc(100% - 60px);

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Scroll = styled.div`
  overflow-y: auto;
  height: 467px;
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
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-content: space-between;
  padding: 10px 0;
  grid-gap: 10px;
  border-radius: 12px;

  ${({ skeletonLoading }) =>
    skeletonLoading &&
    css`
      &:after {
        display: block;
        content: "";
        position: absolute;
        inset: 0;
        background-color: transparent;
        background: linear-gradient(
          90deg,
          transparent 30%,
          #fff 38%,
          #fff 40%,
          transparent 48%
        );
        background-size: 200% 100%;
        background-position: 100% 0;

        animation: skeleton-loading 1s linear infinite;
      }
    `}

  ${({ skeletonLoading }) =>
    !skeletonLoading &&
    css`
      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
    `}

  @keyframes skeleton-loading {
    100% {
      background-position: -100% 0;
    }
  }
`;

export const Image = styled(LazyLoadImage)`
  height: 120px;
  aspect-ratio: 1;
  display: block;
  object-fit: contain;
  pointer-events: none;
  padding: 8px;
  margin: 0 auto;
`;

export const Packaging = styled(PackagingIcon)`
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
  opacity: 0.6;
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
    opacity: 1;
  }
`;

export const Cross = styled(CrossIcon)`
  height: 16px;
  width: auto;
  margin-bottom: -3px;
`;
