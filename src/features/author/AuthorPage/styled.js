import styled, { css } from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const ImageWrapper = styled.p`
  display: flex;
  justify-content: center;

  ${({ profilePicture }) =>
    profilePicture &&
    css`
    & > span {
      max-width: 300px;
      width: 100%;
      aspect-ratio: 1;
    }
      & > span,
      & > span > img {
        border-radius: 50%;
        max-width: 300px;
      }
    `}
`;

export const Image = styled(LazyLoadImage)`
  width: 100%;
  display: block;
`;

export const Paragraph = styled.p`
  max-width: 675px;
  line-height: 1.5;
  margin: 10px auto;
  text-align: center;

  ${({ small }) =>
    small &&
    css`
      font-size: 0.7rem;
      letter-spacing: 1px;
    `};
`;
