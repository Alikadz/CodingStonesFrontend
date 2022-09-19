import React from "react";
import Avatar from "../common/avatar/AvatarImage";
import Wrapper from "../common/wrapper/Wrapper";
import UserImage from "../../assets/super_user.png";
import { ReactComponent as ArrowBottom } from "../../assets/icons/ArrowBottom.svg";
import { useSelector } from "react-redux";
import { Text } from "../common/text/Text.styled";

const UserProfile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <Wrapper display="flex" align="center" justify="space-around">
      <Text className="pr-2">{user?.name || "Harun Focic"}</Text>
      <Avatar
        img={user?.picture || UserImage}
        size="44px"
        radius="50%"
        margin="0 0.5rem 0 0"
      />
      <ArrowBottom />
    </Wrapper>
  );
};

export default UserProfile;
