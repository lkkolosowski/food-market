import { toAuthor, toProducts } from "../../routes";
import Container from "../Container";
import image from "../../images/logo128.png";
import { NavLink } from "react-router-dom";
import { List, Item, Wrapper, Image, Nav, StyledNavLink } from "./styled";

const Navigation = () => {
  return (
    <Nav>
      <Container trimmed>
        <Wrapper>
          <NavLink to={toAuthor()}>
            <Image src={image} alt="Food Market" />
          </NavLink>
          <List>
            <Item>
              <StyledNavLink to={toProducts()}>Products</StyledNavLink>
            </Item>
            <Item>
              <StyledNavLink to={toAuthor()}>About</StyledNavLink>
            </Item>
          </List>
        </Wrapper>
      </Container>
    </Nav>
  );
};

export default Navigation;
