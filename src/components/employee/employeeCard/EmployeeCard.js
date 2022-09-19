import React, { useState } from "react";
import Avatar from "../../common/avatar/AvatarImage";
import Wrapper from "../../common/wrapper/Wrapper";
import { Text } from "../../common/text/Text.styled";
import { Title } from "../../common/text/Title.styled";
import { StyledCard } from "../../common/UI/Card.styled";
import { StyledEmployee, StyledEmployeeWrapper } from "./EmployeeCard.styled";
import SkillList from "../../common/skill/SkillList";
import { useSelector, useDispatch } from "react-redux";
import { resourcePlanningActions } from "../../../store/ResourcePlanning-Slice";
import { Button } from "../../common/button/Button.styled";
import { assigningActions } from "../../../store/Assigning-Slice";
import AvatarCircle from "../../common/avatar/AvatarCircle";
import MorePojects from "./MorePojects";
import { theme } from "../../../style/Theme";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ProjectDetails } from "./ProjectDetails";
import ProjectContainer from "../../common/UI/ProjectContainer";
import { useEffect } from "react";

const Employee = ({
  boxShadow,
  data,
  user,
  setIsOpen,
  setUser,
  showCircle = false,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [employeeClickable, setEmployeeClickable] = useState(true);
  const [cursor, setCursor] = useState("context-menu");
  const [searchParams, setSearchParams] = useSearchParams();
  const UserImage = `https://stg-coding-stones-api.zendev.se/${user.image_url}`;

  const emplyeeIdRedux = useSelector(
    (state) => state.resourcePlanning.employeeId
  );

  const isEmployeeClicked = useSelector(
    (state) => state.resourcePlanning.isEmployeeClicked
  );
  const isServiceClicked = useSelector(
    (state) => state.resourcePlanning.isServiceClicked
  );

  const [matched, setMatched] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const matchServicesHandler = (employeeId) => {
    if (employeeClickable) {
      if (window.location.pathname === "/resource-planning") {
        dispatch(resourcePlanningActions.matchServices({ employeeId }));
        navigate({
          pathname: "/resource-planning",
          search: !isEmployeeClicked ? `?employee=${employeeId} ` : "",
        });
        if (data?.find((employee) => employee.id == employeeId)) {
          setIsClicked(!isClicked);
          setMatched(!matched);
        }
      }
    }
  };

  const assignModal = (employeeId) => {
    dispatch(assigningActions.openModal({ employeeId }));
  };

  const tempProjects = user.projects.map((x) => x);

  let moreProjects = [];
  if (tempProjects?.length > 2) {
    while (tempProjects.length > 1) {
      moreProjects.push(tempProjects.pop());
    }
  }

  useEffect(() => {
    if (isServiceClicked) {
      setEmployeeClickable(false);
      setCursor("context-menu");
    } else if (!isServiceClicked) {
      setEmployeeClickable(true);
      setCursor("pointer");
    }
  }, [isServiceClicked]);

  return (
    <StyledCard
      boxShadow={boxShadow}
      onClick={() => {
        matchServicesHandler(user.id);
      }}
      isClicked={isEmployeeClicked}
      matched={emplyeeIdRedux === user.id}
      cursor={cursor}
      style={{ width: "100%" }}
    >
      <StyledEmployee>
        <Wrapper display="flex" align="center" justify="space-between">
          <Avatar img={UserImage} size="4.5rem">
            {showCircle && user.services.length > 0 && (
              <AvatarCircle services={user.services} />
            )}
          </Avatar>
          <Wrapper className="ml-4" style={{ flexGrow: "1" }}>
            <Title
              size="1.5rem"
              weight="bold"
              color={theme.colors.black}
              onClick={(event) => {
                event.stopPropagation();
                setIsOpen(true);
                setSearchParams(window.location.search + `&info=${user.id}`);
                // navigate({
                //   pathname: ``,
                //   search: "?"+window.location.search+`&info=${id}`,
                // });
                // window.location.search = window.location.search+`&info=${id}`
                setUser({
                  id: user.id,
                  fname: user.first_name,
                  lname: user.last_name,
                  role: user.role,
                  image_url: user.image_url,
                  projects: user.projects,
                  services: user.services,
                  status: user.status,
                  skills: user.skills,
                  hire_date: user.hire_date,
                });
              }}
            >
              {user.first_name} {user.last_name}
            </Title>

            <Text size="1rem" weight="normal" color="#7C7C7C">
              {user.role}
            </Text>
          </Wrapper>
        </Wrapper>
        <Wrapper
          display="flex"
          flow="column wrap"
          justify="start"
          align="end"
          style={{ flexGrow: "1" }}
        >
          <Wrapper size="1rem" weight="bold" color="#4D5058">
            <Text size="1rem" weight="bold" color="#4D5058">
              {user.status}
            </Text>
          </Wrapper>
          <Wrapper display="flex" align="flex-end" flow="column wrap">
            {tempProjects?.length > 0 ? (
              tempProjects.map((project) => (
                <ProjectContainer
                  key={project.project.id}
                  name={project.project.name}
                  percentage={project.percentage}
                  position={project.position}
                  end_date={project.end_date}
                  ending_soon={project.ending_soon}
                />
              ))
            ) : (
              <Text size="0.875rem" weight="normal" color={theme.colors.green}>
                Available
              </Text>
            )}
            {moreProjects?.length > 0 && (
              <MorePojects moreProjects={moreProjects} />
            )}
          </Wrapper>
        </Wrapper>
      </StyledEmployee>
      <StyledEmployeeWrapper>
        <StyledEmployee>
          <SkillList skills={user.skills} />
        </StyledEmployee>
        {isServiceClicked && (
          <Button
            backgroundColor="#33CC99"
            color="white"
            borderRadius="4px"
            onClick={(event) => {
              event.stopPropagation();
              assignModal(user.id);
            }}
          >
            Assign
          </Button>
        )}
      </StyledEmployeeWrapper>
    </StyledCard>
  );
};

export default Employee;
