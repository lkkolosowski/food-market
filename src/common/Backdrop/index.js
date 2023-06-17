import { useDispatch, useSelector } from "react-redux";
import StyledBackdrop from "./styled";
import {
  selectIsFocused,
  setIsFocused,
} from "../../features/products/productListSlice";

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
