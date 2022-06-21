import React from 'react'
import AddContactModal from './AddContactModal'
import AddConatctModal from './AddContactModal'
import ContactData from './ContactData'
import "./SellerEle.css"

function ContactDetails() {
  return (
    <div>
			<div style={{color: "#646464", fontSize:"90%", display:"flex", justifyContent:"left", alignItems:"center"}}>
			<div style={{width:"100%"}}>
				Contact Details
			</div>
			<button class="add-plus-btn" data-toggle="modal" data-target="#add-contact-PopUp">Add Contacts +</button>
			<AddContactModal />
			</div>
			<table style={{width:"100%", margin:"2% auto auto auto"}}>
				<tr className="contact-card-header">
					<th class="table-card-heading">Name</th>
					<th class="table-card-heading">Designation</th>
					<th class="table-card-heading">Mobile</th>
					<th class="table-card-heading">Email</th>
					<th class="table-card-heading">Notes</th>
				</tr>
				<ContactData name="Alfred Noble" desig="Manager" mobile="9021938214" email="HR Manager" notes="lorem ipsum dolor sit amet.."/>
				<ContactData name="Alfred Noble" desig="Manager" mobile="9021938214" email="HR Manager" notes="lorem ipsum dolor sit amet.."/>
				<ContactData name="Alfred Noble" desig="Manager" mobile="9021938214" email="HR Manager" notes="lorem ipsum dolor sit amet.."/>
				<ContactData name="Alfred Noble" desig="Manager" mobile="9021938214" email="HR Manager" notes="lorem ipsum dolor sit amet.."/>
			</table>
		</div>
  )
}

export default ContactDetails