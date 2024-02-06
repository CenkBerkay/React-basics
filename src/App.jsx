import { useState } from "react";
import { PortfolioItemPage } from "./pages/PortfolioItemPage";
import { data } from "./utils/data";
import { SearchFunction } from "./components/SearchFunction";
import { Wrap } from "@chakra-ui/react";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <Wrap justify="center" py={10} bgColor="blue.100">
      {selectedItem ? (
        <PortfolioItemPage item={selectedItem} clickFn={setSelectedItem} />
      ) : (
        <SearchFunction items={data.hits} clickFn={setSelectedItem} />
      )}
    </Wrap>
  );
};


