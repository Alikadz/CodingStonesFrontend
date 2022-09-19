import { Title } from "../../../text/Title.styled";
import { theme } from "../../../../../style/Theme";
import { Text } from "../../../text/Text.styled";
import Wrapper from "../../../wrapper/Wrapper";
import React, { useState } from "react";
import { UnassignUserFromService } from "../../../../../services/ServiceServices";
import { useQuery } from "@tanstack/react-query";

const LeadAssigned = ({ id, name, percentage, lead }) => {
  const [isRemoveClicked, setRemoveClicked] = useState(false);

  const { isLoading } = useQuery(
    ["unassignLead"],
    () => UnassignUserFromService(id),
    { enabled: isRemoveClicked }
  );

  const removeEmployeeFromLead = () => {
    setRemoveClicked(true);
  };

  return (
    <>
      <Wrapper display="flex" justify="space-between" className="mb-5">
        <Wrapper>
          <Text size="1rem" weight="bold" color={theme.colors.black}>
            {lead}
          </Text>
          <Text size="1rem" color={theme.colors.black} className="pr-1">
            {name} ({percentage}%)
          </Text>
        </Wrapper>

        <Wrapper display="flex" align="flex-end">
          <Title size="1rem" color={theme.colors.green} className="pr-10">
            Edit
          </Title>
          <Title
            size="1rem"
            color={theme.colors.red}
            onClick={removeEmployeeFromLead}
          >
            Remove
          </Title>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default LeadAssigned;
