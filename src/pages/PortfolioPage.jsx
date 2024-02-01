import { PortfolioItemCard } from "../components/PortfolioItemCard";
import { Wrap } from "@chakra-ui/react";

export const PortfolioPage = ({ items, clickFn }) => {
  return (
    <Wrap justify="center" spacing={38} py={10} bgColor="blue.100">
      {items.map((item) => (
        <PortfolioItemCard
          clickFn={clickFn}
          item={item}
          key={item.recipe.label}
        />
      ))}
    </Wrap>
  );
};
