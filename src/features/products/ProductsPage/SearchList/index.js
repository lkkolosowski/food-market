import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  selectIsFocused,
  setIsFocused,
} from "../ProductList/productListSlice";
import {
  Cross,
  Image,
  Item,
  Packaging,
  Remove,
  Scroll,
  StyledSearchList,
  Wrapper,
} from "./styled";
import Label from "../../../../common/Label";
import {
  selectLoading,
  selectProducts,
  selectSearchValue,
  setSearchValue,
} from "./searchListSlice";

const SearchList = () => {
  const dispatch = useDispatch();

  const searchValue = useSelector(selectSearchValue);
  const productsBySearch = useSelector(selectProducts);
  const isLoading = useSelector(selectLoading);
  const isFocused = useSelector(selectIsFocused);

  useEffect(() => {
    dispatch(setSearchValue(searchValue));
  }, [searchValue, dispatch]);

  if (isFocused)
    return (
      <Wrapper>
        <Scroll>
          {isLoading ? (
            <StyledSearchList>
              {Array.from({ length: 24 }, (_, index) => (
                <Item key={index}>
                  <div>
                    <Packaging />
                    <Label variant="skeletonProductName" content="" />
                    <Label variant="skeletonProductName" content="" />
                  </div>
                  <Label variant="skeletonButton" as="span" content="" />
                </Item>
              ))}
            </StyledSearchList>
          ) : productsBySearch.length === 0 ? (
            <>
              <Packaging
                style={{
                  height: "auto",
                  maxWidth: "300px",
                  marginBottom: 0,
                  padding: 0,
                  marginTop: "50px",
                }}
              />
              <Label variant="productCode" content="Products not found" />
            </>
          ) : (
            <StyledSearchList>
              {productsBySearch
                .filter((item) => item.image_front_small_url)
                .map((product) => (
                  <Item key={product.id}>
                    <div>
                      <Image
                        src={product.image_front_small_url}
                        alt={product.product_name ?? "product image"}
                        effect="blur"
                      />
                      <Label
                        variant="productName"
                        content={product.product_name ?? "---"}
                      />
                    </div>
                    <Label
                      variant="button"
                      as="a"
                      disabled={product.quantity >= 10}
                      onClick={() => dispatch(fetchProduct(product.id))}
                      content="Add to list +"
                    />
                  </Item>
                ))}
            </StyledSearchList>
          )}
        </Scroll>
        <Remove onClick={() => dispatch(setIsFocused(false))}>
          <Cross />
        </Remove>
      </Wrapper>
    );
};

export default SearchList;
