import React, { useState, useEffect } from "react";
import {
  PageWrapper,
  MainContent,
  Manipulation,
  SearchInput,
  SortAdd,
  Sort,
  Option,
} from "../../components/common/UI/PageLayout.styled";
import { Filters } from "../../components/common/UI/Filters.styled";
import { Button } from "../../components/common/button/Button.styled";
import { ReactComponent as Add } from "../../assets/icons/Add.svg";
import { theme } from "../../style/Theme";
import EmployeeList from "../../components/employee/employeeList/EmployeeList";
import { useQuery } from "@tanstack/react-query";
import {
  getAllEmployees,
  getFilteredEmployees,
} from "../../services/EmployeeServices";
import { useSearchParams } from "react-router-dom";
import EmployeeSidebar from "../../components/employee/employeeList/EmployeeSidebar";
import EmployeeModal from "./EmployeeModal";

const Employees = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const subfilter = searchParams.get("subfilter");
  const name = searchParams.get("search");
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});
  const [text, setText] = useState("");

  const { data: dataEmployees, isLoading: isLoadingEmployees } = useQuery(
    ["employees"],
    getAllEmployees
  );

  const { data: filteredEmployees } = useQuery(
    ["filteredEmployees", filter, subfilter, name],
    getFilteredEmployees
  );

  const setInputText = (e) =>{
    setText(e.target.value);
  }

  const searchHandler = async() =>{
    setSearchParams(`?search=${text}&filter=${filter}&subfilter=${subfilter}`);
  }

  useEffect(()=>{
    searchHandler();
  },[text])

  if (isLoadingEmployees) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <PageWrapper>
        <Filters style={{ overflow: "auto" }}>
          <EmployeeSidebar
            setIsFilterClicked={setIsFilterClicked}
            filter={filter}
            subfilter={subfilter}
            searchParams={searchParams}
            name={name}
          />
        </Filters>
        <MainContent className="ml-2">
          <Manipulation>
            <SearchInput 
            placeholder="Search" 
            type="text" 
            width="49.5%" 
            onChange={setInputText}
            />
            <SortAdd>
              <Sort>
                <Option> Sort by </Option>
              </Sort>
              <Button
                padding="1rem 2.5rem"
                color={theme.colors.white}
                backgroundColor={theme.colors.green}
              >
                Add new
                <Add className="ml-2" />
              </Button>
            </SortAdd>
          </Manipulation>
          <EmployeeList
            data={dataEmployees}
            filteredEmployees={filteredEmployees}
            setIsFilterClicked={setIsFilterClicked}
            filter={filter}
            subfilter={subfilter}
            setIsOpen={setIsOpen}
            setUser={setUser}
          />
          {isOpen && (
            <EmployeeModal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              close={() => setIsOpen(false)}
              user={user}
            />
          )}
        </MainContent>
      </PageWrapper>
    </>
  );
};

export default Employees;
