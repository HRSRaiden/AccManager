import React from "react";
import "./SellerEle.css";
import TicketListData from "./TicketListData";

function TicketList() {
	return (
		<div>
			<div style={{ color: "#646464", fontSize: "90%" }}>
				History of Ticket ID ZS28238
			</div>
			<table style={{ width: "100%", margin: "2% auto auto auto" }}>
				<tr className="contact-card-header">
					<th class="table-card-heading">Ticket List</th>
					<th class="table-card-heading">Date</th>
					<th class="table-card-heading">Company Rep</th>
          <th class="table-card-heading">Module</th>
          <th class="table-card-heading">Comment</th>
				</tr>
				
        <TicketListData id="ZS38238" date="April 1, 2021" compRep="Project Manager" module="Marketplace Integration" comment="None"/>
        <TicketListData id="ZS38238" date="April 1, 2021" compRep="Project Manager" module="Marketplace Integration" comment="None"/>
        <TicketListData id="ZS38238" date="April 1, 2021" compRep="Project Manager" module="Marketplace Integration" comment="None"/>
        <TicketListData id="ZS38238" date="April 1, 2021" compRep="Project Manager" module="Marketplace Integration" comment="None"/>
        <TicketListData id="ZS38238" date="April 1, 2021" compRep="Project Manager" module="Marketplace Integration" comment="None"/>
			</table>
		</div>
	);
}

export default TicketList;
