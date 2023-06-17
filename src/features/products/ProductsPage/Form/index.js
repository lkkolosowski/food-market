import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormField, Button } from "./styled";
import {
  fetchProduct,
  cleanFridge,
  selectLoading,
} from "../ProductList/productListSlice";
import Input from "../Input";
import Loader from "../../../../common/Loader";

const Form = () => {
  const [newProductContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewProductContent = newProductContent.trim();

    if (!trimmedNewProductContent) {
      return;
    }

    dispatch(fetchProduct(trimmedNewProductContent));
    dispatch(cleanFridge());

    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <FormField onSubmit={onFormSubmit}>
      <Input
        autoFocus
        value={newProductContent}
        placeholder="Enter product barcode here"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
        maxLength={225}
      />
      <Button disabled={isLoading}>
        {isLoading ? <Loader /> : "Add product"}
      </Button>
    </FormField>
  );
};

export default Form;
