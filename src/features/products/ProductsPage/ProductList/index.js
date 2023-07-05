import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
  selectProducts,
} from "./productListSlice";
import {
  Fridge,
  Image,
  Product,
  Cell,
  Remove,
  CellInner,
  Cross,
  HeaderCell,
  Packaging,
  Paragraph,
  StyledLink,
  Quantity,
} from "./styled";
import Label from "../../../../common/Label";
import ProductBarcode from "./ProductBarcode";

const ProductList = () => {
  const products = useSelector((state) => selectProducts(state));

  const dispatch = useDispatch();

  return (
    <>
      {products.length > 0 ? (
        <>
          <Fridge>
            <thead>
              <tr>
                <HeaderCell>Product</HeaderCell>
                <HeaderCell>Name</HeaderCell>
                <HeaderCell noMobile>Barcode</HeaderCell>
                <HeaderCell>Quantity</HeaderCell>
                <HeaderCell noTablet>Energy</HeaderCell>
                <HeaderCell noTablet>Fat</HeaderCell>
                <HeaderCell noTablet>Carbs</HeaderCell>
                <HeaderCell noTablet>Proteins</HeaderCell>
                <HeaderCell></HeaderCell>
              </tr>
            </thead>
            <tbody>
              {products.map(
                (product) =>
                  product.status === 1 && (
                    <Product key={product.id}>
                      <Cell withImage>
                        {product.product.image_front_url && (
                          <div>
                            {product.product.image_front_url ? (
                              <Image
                                src={product.product.image_front_small_url}
                                alt={product.product.product_name ?? "product image"}
                                effect="blur"
                              />
                            ) : (
                              <Packaging />
                            )}
                          </div>
                        )}
                      </Cell>
                      <Cell productName>
                        <StyledLink
                          href={`https://world.openfoodfacts.org/product/${product.code}/`}
                          target="_blank"
                        >
                          {" "}
                          {product.product.product_name ?? product.product.brands.split(",")[0]}
                        </StyledLink>
                      </Cell>
                      <Cell noMobile barcode>
                        <ProductBarcode value={product.code} />
                        <Label variant="productCode" content={product.code} />
                      </Cell>
                      <Cell>
                        <CellInner>
                          <Label
                            as="button"
                            variant="-"
                            content="-"
                            hidden={product.quantity <= 1}
                            onClick={() =>
                              dispatch(decreaseQuantity(product.id))
                            }
                          />
                          <Quantity>{product.quantity}</Quantity>
                          <Label
                            as="button"
                            variant="+"
                            content="+"
                            hidden={product.quantity >= 10}
                            onClick={() =>
                              dispatch(increaseQuantity(product.id))
                            }
                          />
                        </CellInner>
                      </Cell>
                      <Cell noTablet>
                        <CellInner>
                          <span>
                            {product["product"]["nutriments"]["energy-kcal"] ??
                              "?"}
                          </span>
                          {product["product"]["nutriments"]["energy-kcal"] >=
                          0 ? (
                            <Label
                              variant="kcal"
                              content={
                                <>
                                  kcal
                                  <br />
                                  /100g
                                </>
                              }
                            />
                          ) : (
                            ""
                          )}
                        </CellInner>
                      </Cell>
                      <Cell noTablet>
                        <CellInner>
                          <span>{product.product.nutriments.fat ?? "?"}</span>
                          {product.product.nutriments.fat >= 0 ? (
                            <Label
                              variant="g/100g"
                              content={
                                <>
                                  g<br />
                                  /100g
                                </>
                              }
                            />
                          ) : (
                            ""
                          )}
                        </CellInner>
                      </Cell>
                      <Cell noTablet>
                        <CellInner>
                          <span>
                            {product.product.nutriments.carbohydrates ?? "?"}
                          </span>
                          {product.product.nutriments.carbohydrates >= 0 ? (
                            <Label
                              variant="g/100g"
                              content={
                                <>
                                  g<br />
                                  /100g
                                </>
                              }
                            />
                          ) : (
                            ""
                          )}
                        </CellInner>
                      </Cell>
                      <Cell noTablet>
                        <CellInner>
                          <span>
                            {product.product.nutriments.proteins ?? "?"}
                          </span>
                          {product.product.nutriments.proteins >= 0 ? (
                            <Label
                              variant="g/100g"
                              content={
                                <>
                                  g<br />
                                  /100g
                                </>
                              }
                            />
                          ) : (
                            ""
                          )}
                        </CellInner>
                      </Cell>

                      <Cell remove>
                        <Remove
                          onClick={() => dispatch(removeProduct(product.id))}
                        >
                          <Cross />
                        </Remove>
                      </Cell>
                    </Product>
                  )
              )}
            </tbody>
          </Fridge>
        </>
      ) : (
        <>
          <Packaging style={{ maxWidth: "300px" }} />
          <Paragraph small>
            The product list is empty. Add products by entering the barcode or
            search by keywords.
          </Paragraph>
        </>
      )}
    </>
  );
};

export default ProductList;
