import Container from "../../../common/Container";
import Footer from "../../../common/Footer";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import image from "../../../images/image.jpg";
import { ImageWrapper, Image, Paragraph } from "./styled";

function AuthorPage() {
  return (
    <>
      <Container page author>
        <Header title="About author" />
        <Section
          title="Łukasz Kołosowski"
          body={
            <>
              <ImageWrapper>
                <Image avatar src={image} alt="Łukasz" />
              </ImageWrapper>
              <Paragraph>Hi! 👋🏼 My name is Łukasz, I'm from Wrocław.</Paragraph>
              <Paragraph>
                I ride a bike a lot 🚴.
                <br />
                I like to admire the views (mountains 🌄, forests 🛤️, sea 🌅).
                <br />
                I am interested in programming 💻, cooking 🍳🍴,
                <br />
                and I also like to go to the gym sometimes 💪 :)
              </Paragraph>
            </>
          }
        />
        <Footer />
      </Container>
    </>
  );
}

export default AuthorPage;
