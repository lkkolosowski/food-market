import Container from "../../../common/Container";
import Footer from "../../../common/Footer";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import image from "../../../images/image.jpg";
import imagePlaceholder from "../../../images/image-150.jpg";
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
              <ImageWrapper profilePicture>
                <Image
                  src={image}
                  alt="Łukasz"
                  // height={300}
                  // width={300}
                  effect="blur"
                  placeholderSrc={imagePlaceholder}
                />
              </ImageWrapper>
              <Paragraph>Hi! 👋🏼 My name is Łukasz, I'm from Wrocław.</Paragraph>
              <Paragraph>
                I like to admire the views (mountains 🌄, forests 🛤️, sea 🌅).
              </Paragraph>
              <Paragraph>
                and I also like to go to the gym sometimes 💪 :)
              </Paragraph>
              <Paragraph>I am interested in programming 💻,</Paragraph>
              <Paragraph>I ride a bike a lot 🚴.</Paragraph>
            </>
          }
        />
        <Footer />
      </Container>
    </>
  );
}

export default AuthorPage;
