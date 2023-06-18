import Form from "./Form";
import ProductList from "./ProductList";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Footer from "../../../common/Footer";
import Search from "./Search";
import SearchList from "./SearchList";
import Backdrop from "../../../common/Backdrop";

function ProductsPage() {
  return (
    <>
      <Container page products>
        <Header title="Food Market" />
        <Section body={<Form />} />
        <Section
          body={
            <>
              <Backdrop />
              <Search />
              <SearchList />
            </>
          }
        />
        <Section variant="productList" body={<ProductList />} />
        <Footer />
      </Container>
    </>
  );
}

export default ProductsPage;
