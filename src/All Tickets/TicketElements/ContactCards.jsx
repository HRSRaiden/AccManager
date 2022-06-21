import React from "react";
import ContactTableData from "./ContactTableData";
import "./TicketEle.css"

function ContactCards() {
	return (
		<div>
			<div style={{color: "#646464", fontSize:"90%"}}>History of Ticket ID ZS28238</div>
			<table style={{width:"100%", margin:"2% auto auto auto"}}>
				<tr className="contact-card-header">
					<th class="table-card-heading">Name</th>
					<th class="table-card-heading">Contact</th>
					<th class="table-card-heading">Designation</th>
				</tr>
				<ContactTableData name="Alfred Noble" contact="9021938214" desig="HR Manager"/>
                <ContactTableData name="Alfred Noble" contact="9021938214" desig="HR Manager"/>
                <ContactTableData name="Alfred Noble" contact="9021938214" desig="HR Manager"/>
                <ContactTableData name="Alfred Noble" contact="9021938214" desig="HR Manager"/>
			</table>
		</div>
	);
}

export default ContactCards;
