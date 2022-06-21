import React from 'react'
import AccNavbar from '../AccManager Navbar/AccNavbar'
import Heading from '../Heading/Heading'
import "./allTickets.css"
import ContactCards from './TicketElements/ContactCards'
import HistoryOfTicket from './TicketElements/HistoryOfTicket'
import SellerDetails from './TicketElements/SellerDetails'
import TicketDetails from './TicketElements/TicketDetails'

// Note: The CSS of its div are in heading.css

function Tickets() {
  return (
    <div>
        <div class="above-navbar" >
				<span class="section-heading"> Tickets </span>
				<Heading />
			</div>
            <AccNavbar title="Home / All Tickets / Ticket" />
            <div style={{marginTop:"5%"}}>
                <TicketDetails />
            </div>
            <div style={{marginTop:"5%"}}>
                <SellerDetails />
            </div>
            <div style={{marginTop:"5%"}}>
                <ContactCards />
            </div>
            <div style={{marginTop:"5%"}}>
                <HistoryOfTicket />
            </div>
            <div style={{marginTop:"5%", marginBottom:"5%"}}>
                <button class="take-action-btn">Take Action</button>
            </div>
    </div>
  )
}

export default Tickets