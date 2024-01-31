import {
  Card,
  Image,
  CardBody,
  VStack,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Tag } from "./ui/PortfolioItemPage";

export const PortfolioItemCard = ({ item, clickFn }) => {
  return (
    <Card
      borderRadius="xl"
      w="sm"
      h="35rem"
      onClick={() => clickFn(item)}
      cursor="pointer"
      _hover={{ transform: "scale(1.01)" }}
    >
      <Image h={64} src={item.image} objectFit="cover" borderTopRadius="xl" />
      <CardBody>
        <VStack justifyContent="center" mt="3" spacing="2">
          <Text textTransform="uppercase" color="gray" fontSize="xs">
            {item.mealType}
          </Text>
          <Heading textAlign="center" size="md">
            {item.label}
          </Heading>
          <Text>{item.summary}</Text>
          <Flex gap={2}>
            {item.healthLabels.includes("Vegan") && (
              <Tag bgColor="#ecd7fc"> Vegan</Tag>
            )}
            {item.healthLabels.includes("Vegetarian") && (
              <Tag bgColor="#ecd7fc"> Vegetarian</Tag>
            )}
          </Flex>
          <Flex gap={2}>
            {item.dietLabels.map((diet) => (
              <Tag bgColor="#bdf8cf" key={diet}>
                {diet}
              </Tag>
            ))}
          </Flex>
          <Text textTransform="capitalize">
            Dish:{" "}
            <Text as="span" fontWeight="500">
              {item.dishType}
            </Text>
          </Text>
          <Text>Cautions:</Text>
          <Flex gap={2}>
            {item.cautions.map((caution) => (
              <Tag bgColor="#ffdcdb" key={caution}>
                {caution}
              </Tag>
            ))}
          </Flex>
        </VStack>
      </CardBody>
    </Card>
  );
};
