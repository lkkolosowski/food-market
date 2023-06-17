import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
  selectProducts,
} from "../../productListSlice";
import {
  Fridge,
  Image,
  Product,
  Cell,
  Remove,
  CellInner,
  Cross,
  HeaderCell,
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
                <HeaderCell noTablet></HeaderCell>
              </tr>
            </thead>
            <tbody>
              {products.map(
                (product) =>
                  product.status === 1 && (
                    <Product key={product.id}>
                      <Cell withImage>
                        {product.product.image_front_url && (
                          <Image
                            src={product.product.image_front_url}
                            alt={product.product.product_name}
                          />
                        )}
                      </Cell>
                      <Cell productName>
                        {product.product.product_name ?? "---"}
                        {/* <br />
                        <Label variant={task.code} /> */}
                      </Cell>
                      <Cell noMobile barcode>
                        <ProductBarcode value={product.code} />
                        <Label variant={product.code} content={product.code} />
                      </Cell>
                      <Cell>
                        <CellInner>
                          <Label
                            as="button"
                            variant="-"
                            content="-"
                            hidden={product.quantity <= 1}
                            onClick={() => dispatch(decreaseQuantity(product.id))}
                          />
                          <span>{product.quantity}</span>
                          <Label
                            as="button"
                            variant="+"
                            content="+"
                            hidden={product.quantity >= 10}
                            onClick={() => dispatch(increaseQuantity(product.id))}
                          />
                        </CellInner>
                      </Cell>
                      <Cell noTablet>
                        <CellInner>
                          <span>
                            {product["product"]["nutriments"]["energy-kcal"] ??
                              "?"}
                          </span>
                          {product["product"]["nutriments"]["energy-kcal"] >= 0 ? (
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
                          <span>{product.product.nutriments.proteins ?? "?"}</span>
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
          {/* <List> */}
          {/* {tasks.map((task) => (
              <Item>
                <Content>
                  <ul>
                    <li>{task.product.product_name}</li>
                    <li>EAN: {task.code}</li>
                    <li>
                      <img
                        src={task.product.image_front_url}
                        alt={task.product.product_name}
                      ></img>
                    </li>
                    <li>{task.product.categories}</li>
                  </ul>
                  <table>
                    <thead>
                      <tr>
                        <th colSpan="3">Macros</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Kcal:</td>
                        <td>
                          {task["product"]["nutriments"]["energy-kcal"]}
                        </td>
                        <td>kcal / 100 g</td>
                      </tr>
                      <tr>
                        <td>Carbohydrates:</td>
                        <td>{task.product.nutriments.carbohydrates}</td>
                        <td>g / 100 g</td>
                      </tr>
                      <tr>
                        <td>Fat:</td>
                        <td>{task.product.nutriments.fat}</td>
                        <td>g / 100 g</td>
                      </tr>
                      <tr>
                        <td>Proteins:</td>
                        <td>{task.product.nutriments.proteins}</td>
                        <td>g / 100 g</td>
                      </tr>
                    </tbody>
                  </table>
                </Content>
              </Item>
            ))} */}
          {/* </List> */}
        </>
      ) : (
        <>
          <p>Product not found.</p>
          <p>
          Sample EAN codes: <br />
            20858087 (cottage cheese) <br /> 5000159461122 (chocolate bar)
          </p>
        </>
      )}
    </>
  );
};

export default ProductList;
