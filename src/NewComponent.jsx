import * as React from "react";
import Part_One from "./Part_One";
import Part_Two from './Part_Two'
import  "./assets/NewComponent.css";
import Part_Three from './Part_Three'

function NewComponent({ContextService,SPHttpClient }) {
  React.useEffect(() => {
    const Run = () => {
      var url =
        ContextService.GetUrl() +
        "/_api/web/lists/getbytitle('HR365HDMTickets')/items/?$select=ID,Created,TicketCreatedDate,DepartmentName,Title,Priority,Services,SubServices,TicketProperties,RequesterName,SurveyProperties,TicketSeqnumber,Status,AssignedToId,TicketID,Requester/Title,AssignedTo/Title&$expand=AssignedTo/ID,Requester/ID&$top=5000&$orderby=TicketCreatedDate desc";
      ContextService.GetSPContext()
        .get(url, SPHttpClient.configurations.v1, {
          headers: {
            Accept: "application/json;odata=nometadata",
            "odata-version": "",
          },
        })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("SPFX", { data });
        });
    };
    Run();
  }, []);
  return (
    <div>
      <div style={{ width: "100%" }} className="main">
        <div style={{ width: "60%" }}>
          <Part_One />
        </div>
        <div style={{ width: "40%", display: "flex" }}>
          <div style={{ width: "50%" }}>
            <Part_Two />
          </div>
          <div style={{ width: "50%" }}>
            <Part_Three />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewComponent;
