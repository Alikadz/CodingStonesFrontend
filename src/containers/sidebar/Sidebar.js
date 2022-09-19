import { useState, React } from "react";
import {
  ListItem,
  StyledSidebar,
  UnorderedList,
  StyledNavLink,
  Toggle,
  Switch,
  RouteTitle,
} from "./Sidebar.styled";
import { ReactComponent as Home } from "../../assets/icons/Home.svg";
import { ReactComponent as Employees } from "../../assets/icons/Employees.svg";
import { ReactComponent as ResourcePlanning } from "../../assets/icons/ResourcePlanning.svg";
import { ReactComponent as Vsg } from "../../assets/icons/VSG.svg";
import { ReactComponent as Technologies } from "../../assets/icons/Technologies.svg";
import { ReactComponent as Projects } from "../../assets/icons/Projects.svg";
import { ReactComponent as Equipment } from "../../assets/icons/Equipment.svg";
import { ReactComponent as Leads } from "../../assets/icons/Leads.svg";
import { ReactComponent as Sun } from "../../assets/icons/Sun.svg";
import { ReactComponent as Moon } from "../../assets/icons/Moon.svg";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { resourcePlanningActions } from "../../store/ResourcePlanning-Slice";
import { Wrapper } from "../../components/common/wrapper/Wrapper"

const Sidebar = () => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  const isServiceClicked = useSelector(
    (state) => state.resourcePlanning.isServiceClicked
  );

  const clickedButton = () => {
    setIsClicked(!isClicked);
  };
  return (
    <StyledSidebar>
      <UnorderedList>
        <ListItem>
          <StyledNavLink to="/">
            <Home className="svgIcon" />
            <RouteTitle>Home</RouteTitle>
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink
            to="/employees?filter=all_roles&subfilter=all"
            className={({ isActive }) => (isActive ? "active" : "none")}
          >
            <Employees className="svgIcon" />
            <RouteTitle>Employees</RouteTitle>
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink
            to="/resource-planning"
            onClick={() => dispatch(resourcePlanningActions.setAvatarCircle)}
          >
            <ResourcePlanning className="svgIcon" />
            <RouteTitle>Resource planning</RouteTitle>
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/value-stream-grid">
            <Vsg className="svgIcon" />
            <RouteTitle>Value Stream Grid</RouteTitle>
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/technologies">
            <Technologies className="svgIcon" />
            <RouteTitle>Technologies</RouteTitle>
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="projects?filter=all&subfilter=all">
            <Projects className="svgIcon" />
            <RouteTitle>Projects</RouteTitle>
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/equipment">
            <Equipment className="svgIcon" />
            <RouteTitle>Equipment</RouteTitle>
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="leads?name=&filter=all&subfilter=all">
            <Leads className="svgIcon" />
            <RouteTitle>Leads</RouteTitle>
          </StyledNavLink>
        </ListItem>
      </UnorderedList>
      <UnorderedList>
        <Wrapper width='100%' className={'h-16 pl-6'}>
          <Switch onClick={clickedButton} isClicked={isClicked}>
            <Toggle>
              <Sun className="svgIcon" />
              <Moon className="svgIcon" />
            </Toggle>
          </Switch>
        </Wrapper>
      </UnorderedList>
    </StyledSidebar>
  );
};

export default Sidebar;
