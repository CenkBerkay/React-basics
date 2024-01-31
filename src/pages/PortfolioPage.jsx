import { PortfolioItemCard } from "../components/PortfolioItemCard";
import { data } from "../utils/data";
import { Wrap } from "@chakra-ui/react";

export const PortfolioPage = ({ clickFn }) => {
  return (
    <Wrap justify="center" spacing={38} py={10} bgColor="blue.100">
      {data.hits.map((item) => (
        <PortfolioItemCard clickFn={clickFn} item={item.recipe} key={item} />
      ))}
    </Wrap>
  );
};
