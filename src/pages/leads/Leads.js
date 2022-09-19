import React, { useState, useEffect } from "react";
import { Button } from "../../components/common/button/Button.styled";
import { theme } from "../../style/Theme";
import { LeadCards } from "./Leads.styled";
import {
  MainContent,
  PageWrapper,
  Manipulation,
  SortAdd,
  SearchInput,
  Sort,
  Option,
} from "../../components/common/UI/PageLayout.styled";
import { ReactComponent as Add } from "../../assets/icons/Add.svg";
import { Filters } from "../../components/common/UI/Filters.styled";
import LeadCard from "../../components/leads/LeadCard";
import { getAllLeads, getFilteredLeads } from "../../services/LeadServices";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import LeadSidebar from "./LeadSidebar";
import LeadList from "./LeadList";
import LeadModal from "./LeadModal";

const Leads = () => {
  const [isFilterClicked, setIsFilterClicked] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const subfilter = searchParams.get("subfilter");
  const search = searchParams.get("name");
  const [text, setText] = useState("");
  const [lead, setLead] = useState({});
  const [openLead, setOpenLead] = useState(false);

  const {
    data: dataLeads,
    isError,
    isLoading,
  } = useQuery(["leads"], getAllLeads);

  const { data: dataFilteredLeads } = useQuery(
    ["fiteredLeads", search, filter, subfilter],
    () => getFilteredLeads(search, filter, subfilter)
  );

  const setInputText = (e) => {
    setText(e.target.value);
  };

  const searchHandler = async () => {
    setSearchParams(`?name=${text}&filter=${filter}&subfilter=${subfilter}`);
  };
  useEffect(() => {
    searchHandler();
  }, [text]);

  if (isLoading) {
    return <p>Loading ... </p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <PageWrapper>
      <Filters>
        <LeadSidebar
          filter={filter}
          subfilter={subfilter}
          setIsFilterClicked={setIsFilterClicked}
          searchParams={searchParams}
          search={search}
        />
      </Filters>
      <MainContent>
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
              borderRadius="5px"
            >
              Add new
              <Add className="ml-2" />
            </Button>
          </SortAdd>
        </Manipulation>
        <LeadList 
        dataFilteredLeads={dataFilteredLeads} 
        dataLeads={dataLeads} 
        isFilterClicked={isFilterClicked} 
        openLead={openLead}
        setOpenLead={setOpenLead}
        setLead={setLead}
        />     
        {openLead && (
        <LeadModal
          align="flex-end"
          lead={lead}
          close={(e) => {setOpenLead(false); e.stopPropagation()}}
          openLead={openLead}
          setOpenLead={setOpenLead}
        />
      )}
      </MainContent>
    </PageWrapper>
  );
};

export default Leads;
