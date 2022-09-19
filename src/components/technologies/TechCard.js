import React from "react";
import Wrapper from "../common/wrapper/Wrapper";
import { StyledCard } from "../common/UI/Card.styled";
import { Title } from "../common/text/Title.styled";
import { Text } from "../common/text/Text.styled";
import AvatarImage from "../common/avatar/AvatarImage";
import { theme } from "../../style/Theme";
import SubskillList from "../common/modal/SubskillList";

const TechCard = ({ id, name, users, setOpenSkill, setSkill, subskills }) => {
  const tempEmployees = users?.map((x) => x);

  let morePeople = [];
  while (tempEmployees?.length > 3) {
    morePeople.push(tempEmployees.pop());
  }

  return (
    <StyledCard>
      <Wrapper display="flex" justify="space-between" className="mb-5">
        <Title
          size="24px"
          weight="bold"
          color={theme.colors.black}
          onClick={() => {
            setOpenSkill(true);
            setSkill({ id, name, users, subskills });
          }}
        >
          {name}
        </Title>
        <Wrapper display="flex" align="center">
          <Text
            color={theme.colors.grey300}
            size="1rem"
            weight="bold"
            opacity="0.7"
          >
            PEOPLE
          </Text>
          <Text
            color={theme.colors.black}
            size="25px"
            opacity="1"
            weight="bold"
            className="ml-3"
          >
            {users.length}
          </Text>
        </Wrapper>
      </Wrapper>
      <Wrapper display="flex" justify="space-between" className="mt-1">
        <Wrapper width="60%">
          {subskills.length > 0 ? (
            <Wrapper>
              <Title size="1rem" weight="regular" color={theme.colors.grey800}>
                Subtechnologies
              </Title>
              <Wrapper
                display="grid"
                gridTemplateColumns="repeat(3,1fr)"
                gap=".4rem"
                className="mt-2"
              >
                <SubskillList subskills={subskills} />
              </Wrapper>
            </Wrapper>
          ) : (
            <Text size="1rem" weight="regular" color={theme.colors.grey800}>
              No subtechnologies
            </Text>
          )}
        </Wrapper>
        <Wrapper display="flex" direction="column">
          <Wrapper display="flex" justify="space-between">
            {tempEmployees?.map((employee) => (
              <AvatarImage
                key={employee.user.id}
                img={`https://stg-coding-stones-api.zendev.se/${employee?.user?.image_url}`}
                alt=""
                size="40px"
                margin="0 0 0 0.5rem"
              />
            ))}
          </Wrapper>
          {morePeople.length > 0 && (
            <Wrapper display="flex" justify="flex-end">
              <Text size=".75rem">+{morePeople.length} more</Text>
            </Wrapper>
          )}
        </Wrapper>
      </Wrapper>
    </StyledCard>
  );
};
export default TechCard;
