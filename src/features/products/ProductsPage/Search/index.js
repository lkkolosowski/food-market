import { useDispatch, useSelector } from "react-redux";
import { FormField } from "./styled";
import Input from "../Input";
import {
  selectSearchValue,
  setIsFocused,
  setSearchValue,
} from "../../productListSlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchValue);

  const onInputChange = ({ target }) => {
    dispatch(setSearchValue(target.value));
  };

  return (
    <FormField>
      <Input
        value={searchValue}
        placeholder="Search for groceries"
        onChange={onInputChange}
        maxLength={225}
        onFocus={() => dispatch(setIsFocused(true))}
        // onBlur={() => dispatch(setIsFocused(false))}
      />
    </FormField>
  );
};

export default Search;
