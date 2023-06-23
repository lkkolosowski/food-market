import { useDispatch, useSelector } from "react-redux";
import { FormField } from "./styled";
import Input from "../Input";
import { setIsFocused } from "../ProductList/productListSlice";
import {
  setSearchValue,
  selectSearchValue,
} from "../SearchList/searchListSlice";
import { useState } from "react";

const Search = () => {
  const searchValue = useSelector(selectSearchValue);
  const [searchQueryContent, setSearchQueryContent] = useState(searchValue);

  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    const trimmedSearchQueryContent = target.value.trim();

    setSearchQueryContent(trimmedSearchQueryContent);
    dispatch(setSearchValue(trimmedSearchQueryContent));
  };

  return (
    <FormField>
      <Input
        value={searchQueryContent}
        placeholder="Search by keywords"
        onChange={onInputChange}
        maxLength={26}
        onFocus={() => dispatch(setIsFocused(true))}
      />
    </FormField>
  );
};

export default Search;
