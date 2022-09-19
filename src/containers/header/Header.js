import React from "react";

import { StyledHeader } from "./Header.styled";
import UserProfile from "../../components/userProfile/UserProfile";
import { ReactComponent as Wordmark } from "../../assets/icons/Wordmark.svg";

const Header = () => {
  return (
    <StyledHeader>
      <Wordmark />
      <UserProfile />
    </StyledHeader>
  );
};

export default Header;
