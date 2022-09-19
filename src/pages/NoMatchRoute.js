import { Text } from "../components/common/text/Text.styled";
import { theme } from "../style/Theme";
import React from "react";
import styled from "styled-components";

const NoMatchRoute = () => {
  return (
    <NoPageLayout>
      <Text size="3rem" weight="bold" color={theme.colors.black}>
        Page not found
      </Text>
    </NoPageLayout>
  );
};

export default NoMatchRoute;

const NoPageLayout = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.grey};
  z-index: 3;
  position: fixed;
`;
