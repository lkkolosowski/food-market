import { Wrapper, Body } from "./styled";

const Section = ({ variant, body }) => (
  <Wrapper>
    <Body variant={variant} >{body}</Body>
  </Wrapper>
);

export default Section;
