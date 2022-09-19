import React from "react";
import { StyledEmployeeList } from "./EmployeeList.styled";
import Employee from "../employeeCard/EmployeeCard";

const EmployeeList = ({
  columns,
  filteredEmployees,
  filter,
  subfilter,
  setIsOpen,
  setUser,
}) => {
  return (
    <StyledEmployeeList className="mt-6" columns={columns}>
      {filteredEmployees?.map((empData) => (
        <Employee
          key={empData.id}
          user={empData}
          filter={filter}
          subfilter={subfilter}
          setIsOpen={setIsOpen}
          setUser={setUser}
        />
      ))}
    </StyledEmployeeList>
  );
};

export default EmployeeList;
