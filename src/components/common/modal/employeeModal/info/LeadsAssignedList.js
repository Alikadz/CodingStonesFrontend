import LeadAssigned from './LeadAssigned'
import React from 'react'

const LeadsAssignedList = ({ services }) => {
    return (
        <>
        {
            services?.map((service)=>(
                <LeadAssigned 
                    key={service.id}
                    id={service.id}
                    name={service.name}
                    percentage={service.percentage}
                    lead={service.lead.name}
                />
            ))
        }

        </>
    )
}

export default LeadsAssignedList