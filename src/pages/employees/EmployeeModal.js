import React, { useRef, useEffect } from "react";
import Modal from "../../components/common/modal/Modal";
import { Content } from "../../components/common/modal/Modal.styled";
import Wrapper from "../../components/common/wrapper/Wrapper";
import Avatar from "../../components/common/avatar/AvatarImage";
import { Text } from "../../components/common/text/Text.styled";
import { theme } from "../../style/Theme";
import { Button } from "../../components/common/button/Button.styled";
import ExportImage from "../../assets/icons/Export.png";
import { UOList, Item } from "../../components/common/UI/Filters.styled";
import { ReactComponent as ArrowLeft } from "../../assets/icons/ArrowLeft.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Header,
  Exit,
  Container,
} from "../../components/common/modal/Modal.styled";
import Info from "../../components/common/modal/employeeModal/info/Info";
import Projects from "../../components/common/modal/employeeModal/projectList/Projects";
import ReactDOM from "react-dom";
import { ScrollDisabler } from "../../style/Global";

const EmployeeModal = ({ setIsOpen, user, isOpen, close }) => {
  const navigate = useNavigate();
  const UserImage = `https://stg-coding-stones-api.zendev.se/${user.image_url}`;
  const [searchParams] = useSearchParams();
  const info = searchParams.get("info");
  const projects = searchParams.get("projects");
  const portalRoot = document.getElementById("portal");
  const contentRef = useRef();
  console.log(isOpen)

  useEffect(()=>{
    if(!isOpen)return;
    console.log("past condition")
    function listener(event){
      console.log("Ref condition",contentRef.current.contains(event.target))
      if(contentRef.current.contains(event.target)) return;
      close();
    }

    window.addEventListener("click", listener)

    return () => window.removeEventListener('click', listener)

  },[isOpen])

  return ReactDOM.createPortal(
    <Modal>
      <Content width="54%" height="89%" ref={contentRef}>
        <Header>
          <Exit>
            <ArrowLeft
              onClick={(event) => {
                event.stopPropagation();
                setIsOpen(false);
                navigate(-1);
              }}
              cursor="pointer"
            />
          </Exit>

          <Container padding="0 6rem">
            <Wrapper display="flex" justify="space-between">
              <Wrapper display="flex" justify="center" align="center">
                <Avatar img={UserImage} size="7rem" alt="profile_image" />
                <Wrapper className="ml-2">
                  <Text size="24px" weight="bold" color={theme.colors.black}>
                    {user.fname} {user.lname}
                  </Text>
                  <Text size="17px" color={theme.colors.grey900}>
                    {user.role}
                  </Text>
                  <Wrapper display="flex">
                    <Text size="15px" color={theme.colors.grey900}>
                      In ZenDev since
                    </Text>
                    <Text
                      size="15px"
                      color={theme.colors.grey900}
                      className="pl-1"
                    >
                      {user.hire_date}
                    </Text>
                  </Wrapper>
                </Wrapper>
              </Wrapper>

              <Wrapper
                display="flex"
                direction="column"
                justify="space-evenly"
                align="center"
              >
                <Button
                  padding=".3rem 1rem"
                  backgroundColor={theme.colors.white}
                  fontSize="15px"
                  border="1px solid #C6C6C6"
                >
                  CV PDF <img src={ExportImage} alt="" className="ml-2" />
                </Button>
                <Text size="15px" color={theme.colors.green}>
                  Replace CV
                </Text>
              </Wrapper>
            </Wrapper>

            <UOList display="flex">
              <Item
                onClick={() =>
                  navigate({
                    pathname: `/employees`,
                    search: `?info=${user.id}`,
                  })
                }
                active={searchParams.get("info") === `${user.id}`}
              >
                Info
              </Item>
              <Item
                onClick={() =>
                  navigate({
                    pathname: `/employees`,
                    search: `?projects=${user.id}`,
                  })
                }
                active={searchParams.get("projects") === `${user.id}`}
              >
                Projects
              </Item>
              <Item>Cost</Item>
              <Item>Equipment</Item>
              <Item>Evaluation</Item>
            </UOList>
          </Container>
        </Header>
        {info === `${user.id}` && (
          <Info
            id={user.id}
            skills={user.skills}
            projects={user.projects}
            services={user.services}
          />
        )}
        {projects === `${user.id}` && <Projects projects={user.projects} />}
      </Content>
      <ScrollDisabler />
    </Modal>,
    portalRoot
  );
};

export default EmployeeModal;
