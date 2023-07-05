import { useDispatch, useSelector } from "react-redux";
import StyledBackdrop from "./styled";
import {
  selectIsFocused,
  setIsFocused,
} from "../../features/products/ProductsPage/SearchList/searchListSlice";

const Backdrop = () => {
  const dispatch = useDispatch();
  const isFocused = useSelector(selectIsFocused);

  return (
    <StyledBackdrop
      visible={isFocused}
      onClick={() => dispatch(setIsFocused(false))}
    />
  );
};

export default Backdrop;
