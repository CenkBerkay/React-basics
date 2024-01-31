import { useState } from "react";
import { data } from "../utils/data";
import { PortfolioPage } from "../pages/PortfolioPage";
import { TextInput } from "./ui/TextInput";

export const SearchFunction = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedDrinks = data.filter((item) => {
    return item.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <label>Search for drinks:</label>
      <TextInput onChange={handleChange} w={200} mb={8} />
      <PortfolioPage clickFn={clickFn} items={matchedDrinks} />
    </>
  );
};
