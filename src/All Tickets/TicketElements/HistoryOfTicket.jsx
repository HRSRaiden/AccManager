import React from 'react'
import HistoryData from './HistoryData'
import "./TicketEle.css"

function HistoryOfTicket() {
  return (
    <div>
        <div style={{color: "#646464", fontSize:"90%"}}>History of Ticket ID ZS28238</div>
			<table style={{width:"100%", margin:"2% auto auto auto"}}>
				<tr className="contact-card-header">
					<th class="table-card-heading">Date</th>
					<th class="table-card-heading">Action</th>
					<th class="table-card-heading">Comment</th>
				</tr>
                <HistoryData date="April 1, 2022" action="Issued" comment="Lorem ipsum dolor sit amet"/>
                <HistoryData date="April 1, 2022" action="Issued" comment="Lorem ipsum dolor sit amet"/>
                <HistoryData date="April 1, 2022" action="Issued" comment="Lorem ipsum dolor sit amet"/>
			</table>
    </div>
  )
}

export default HistoryOfTicket