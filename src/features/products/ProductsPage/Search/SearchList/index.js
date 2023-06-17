import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  selectIsFocused,
  selectProducts,
  setIsFocused,
} from "../../../productListSlice";
import {
  Cross,
  Image,
  Item,
  Remove,
  Scroll,
  StyledSearchList,
  Wrapper,
} from "./styled";
import Label from "../../../../../common/Label";

const SearchList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => selectProducts(state));
  const isFocused = useSelector(selectIsFocused);

  if (isFocused)
    return (
      <Wrapper>
        <Scroll>
          <StyledSearchList>
            {products.map(
              (product) =>
                product.status === 1 && (
                  <Item key={product.id}>
                    <div>
                      <Image
                        src={product.product.image_front_url}
                        alt={product.product.product_name}
                      />
                      <Label
                        variant="productName"
                        content={<>{product.product.product_name ?? "---"}</>}
                      />
                    </div>
                    <Label
                      variant="button"
                      as="a"
                      disabled={product.quantity >= 10}
                      onClick={() => dispatch(increaseQuantity(product.id))}
                      content="Add to list +"
                    />
                  </Item>
                )
            )}
          </StyledSearchList>
        </Scroll>
        <Remove onClick={() => dispatch(setIsFocused(false))}>
          <Cross />
        </Remove>
      </Wrapper>
    );
};

export default SearchList;
