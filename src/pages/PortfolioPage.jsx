import { PortfolioItemCard } from "../components/PortfolioItemCard";
//import { data } from "../utils/data";
import { Wrap } from "@chakra-ui/react";

export const PortfolioPage = ({ items, clickFn }) => {
  return (
    <Wrap justify="center" spacing={38}>
      {items.map((item) => (
        <PortfolioItemCard
          item={item.recipe}
          clickFn={clickFn}
          key={item.recipe.label}
        />
      ))}
    </Wrap>
  );
};
