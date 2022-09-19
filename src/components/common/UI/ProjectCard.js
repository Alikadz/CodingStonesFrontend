import { ReactComponent as Calendar } from "../../../assets/icons/Calendar.svg";
import ProjectModal from "../../../pages/projects/ProjectModal";
import AvatarImage, { Avatars } from "../avatar/AvatarImage";
import { StyledCard } from "../../common/UI/Card.styled";
import UserImage from "../../../assets/super_user.png";
import { theme } from "../../../style/Theme";
import { Wrapper } from "../wrapper/Wrapper";
import { Title } from "../text/Title.styled";
import { Text } from "../text/Text.styled";
import { useState } from "react";
import React from "react";
import SkillList from "../skill/SkillList";

const ProjectCard = ({
  id,
  name,
  company,
  type,
  description,
  start_date,
  end_date,
  skills,
  users,
  setIsOpen,
  setProject, 
  isOpen
}) => {
  const [openModal, setOpenModal] = useState(false);

  const tempEmployees = users?.map((x) => x);

  let morePeople = [];
  while (tempEmployees?.length > 3) {
    morePeople.push(tempEmployees.pop());
  }

  return (
    <>
      <StyledCard>
        <Wrapper>
          <Title
            size="20px"
            weight="bold"
            color={theme.colors.black}
            onClick={() => {
              setIsOpen(true);
              setProject({
                id,name,company,type, description, start_date, end_date, skills, users
              })
            }}
          >
            {name}
          </Title>
          <Text size="17px" color={theme.colors.grey800}>
            {company}
          </Text>
        </Wrapper>

        <Wrapper className="pt-1 pb-3">
          <SkillList skills={skills} />
        </Wrapper>

        <Wrapper>
          <Text size="17px" color={theme.colors.black}>
            {description}
          </Text>
        </Wrapper>

        <Wrapper className="mt-3" display="flex" justify="space-between">
          <Avatars>
            {tempEmployees?.map((employee) => (
              <AvatarImage
                key={employee.user.id}
                img={`https://stg-coding-stones-api.zendev.se/${employee?.user?.image_url}`}
                alt=""
                size="40px"
              />
            ))}
            {morePeople.length > 0 && (
              <Text size="0.9rem" color={theme.colors.grey800}>
                +{morePeople.length} more
              </Text>
            )}
          </Avatars>

          <Wrapper display="flex" justify="center" align="center">
            <Calendar className="mr-2" width="16px" heigh="16px" />
            <Text size="17px" color={theme.colors.blue500}>
              01/05/2022 - 01/10/2022
            </Text>
          </Wrapper>
        </Wrapper>
      </StyledCard>
    </>
  );
};

export default ProjectCard;
