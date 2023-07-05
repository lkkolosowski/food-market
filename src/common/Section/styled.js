import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(186, 199, 213, 0.5);
  margin-bottom: 10px;
  z-index: 8;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.color.alto};
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-direction: column;
  }
`;

export const Body = styled.div`
  padding: 20px;
  min-height: 56px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0;
  padding: 2px 0;
`;
