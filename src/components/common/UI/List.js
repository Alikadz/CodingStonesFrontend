import React from "react";
import { UOList, Item } from "./Filters.styled";
import { theme } from "../../../style/Theme";
import { Text } from "../text/Text.styled";


const List = () => {
  return (
    <>
      <UOList>
        <Text size="20px" color={theme.colors.black} weight="bold" className="mb-4">
          Level
        </Text>
        <Item>All level</Item>
        <Item>High</Item>
        <Item>Medium</Item>
        <Item>Low</Item>
      </UOList>
    </>
  );
};

export default List;
