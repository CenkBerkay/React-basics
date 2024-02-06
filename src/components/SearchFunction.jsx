import { useState } from "react";
//import { data } from "../utils/data";
import { PortfolioPage } from "../pages/PortfolioPage";
import { TextInput } from "./ui/TextInput";
import { VStack, Text } from "@chakra-ui/react";

export const SearchFunction = ({ items, clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = items.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <VStack>
      <Text color={"white"} fontWeight={"bold"} fontSize={"3xl"}>
        Winc Recipe Checker
      </Text>
      <TextInput onChange={handleChange} w={500} mb={8} />
      <PortfolioPage clickFn={clickFn} items={matchedRecipes} />
    </VStack>
  );
};
