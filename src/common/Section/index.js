import { Wrapper, Body } from "./styled";

const Section = ({ body, mobileStretch }) => (
  <Wrapper>
    <Body mobileStretch={mobileStretch}>{body}</Body>
  </Wrapper>
);

export default Section;
