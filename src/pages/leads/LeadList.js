import React from 'react'
import { LeadCards } from './Leads.styled';
import LeadCard from '../../components/leads/LeadCard';

const LeadList = ({dataFilteredLeads, dataLeads, isFilterClicked, openLead, setOpenLead, setLead}) => {
  return (
    <>
         <LeadCards className="mt-6">
          {!isFilterClicked
            ? dataLeads?.map((lead) => {
                return (
                  <LeadCard
                    key={lead.id}
                    id={lead.id}
                    name={lead.name}
                    description={lead.description}
                    start_date={lead.start_date}
                    company_name={lead.company_name}
                    probability={lead.probability}
                    count={lead.count}
                    total_hours={lead.total_hours}
                    openLead={openLead}
                    setOpenLead={setOpenLead}
        setLead={setLead}
                  />
                );
              })
            : dataFilteredLeads?.map((lead) => {
                return (
                  <LeadCard
                    key={lead.id}
                    id={lead.id}
                    name={lead.name}
                    description={lead.description}
                    start_date={lead.start_date}
                    company_name={lead.company_name}
                    probability={lead.probability}
                    count={lead.count}
                    total_hours={lead.total_hours}
                    openLead={openLead}
                    setOpenLead={setOpenLead}
        setLead={setLead}

                  />
                );
              })}
        </LeadCards>
    </>
  )
}

export default LeadList