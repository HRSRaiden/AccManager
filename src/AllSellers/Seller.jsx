import React from "react";
import AccNavbar from "../AccManager Navbar/AccNavbar";
import Heading from "../Heading/Heading";
import CompanyDetails from "./SellerElements/CompanyDetails";
import ContactDetails from "./SellerElements/ContactDetails";
import TicketList from "./SellerElements/TicketList";

function Seller() {
	return (
		<div>
			<div class="above-navbar">
				<span class="section-heading"> Seller ID S123 </span>
				<Heading />
			</div>

			<AccNavbar title="Home / All Sellers / Sellers" />

			<div style={{ marginTop: "5%" }}>
				<CompanyDetails />
			</div>
			<div style={{ marginTop: "5%" }}>
				<ContactDetails />
			</div>
			<div style={{ marginTop: "5%", marginBottom: "5%" }}>
				<TicketList />
			</div>
		</div>
	);
}

export default Seller;
