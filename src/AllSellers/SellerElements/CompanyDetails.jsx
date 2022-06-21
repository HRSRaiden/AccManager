import React from 'react'
import KYCStatus from './KYCStatus'
import "./SellerEle.css"

// For  KYC status, the status takes in value "done" and "not-done". So if staus is done the display is green else red
function CompanyDetails() {
  return (
    <div id="Ticket-detials-box">
			<div id="detail-Heading">
				<div style={{ padding: "0.8rem" }}>
					<span style={{ opacity: "1", fontWeight: "500" }}>
						Company Details{" "}
					</span>{" "}
					<span style={{ fontSize: "85%" }}>(ZS38238)</span>
				</div>
			</div>

            <div style={{margin:"auto 2% 2% 2%"}}>
                <div style={{display:"flex", justifyContent:"left"}}>
                    <p class="label-heads">Company Name : <span class="lable-content">Publicis Sapient</span></p>
                    <p class="label-heads">Comapany Address : <span class="lable-content">Gachibowli, Hyderabad</span></p>
                </div>

                <div style={{display:"flex", justifyContent:"left"}}>
                    <p class="label-heads">Company Category : <span class="lable-content">Global Expansion Strategy</span></p>
                    <p class="label-heads">Website URL : <span class="lable-content">May 1, 2022</span></p>
                </div>
                
                <div style={{display:"flex", justifyContent:"left", alignItems:"center"}}>
                    <p class="kyc">KYC Status : </p>
                    <KYCStatus status="done" level="Level 1"/>
                    <KYCStatus status="done" level="Level 2"/>
                    <KYCStatus status="not-done" level="Level 3"/>
                </div>

                <div style={{display:"flex", justifyContent:"left"}}>
                    <p class="label-heads">Mobile : <span class="lable-content">+91 73888993</span></p>
                </div>

                <div style={{display:"flex", justifyContent:"left"}}>
                    <p class="label-heads">Email : <span class="lable-content">loremipsumdolor@gmail.com</span></p>
                </div>

                <div style={{display:"flex", justifyContent:"left"}}>
                    <p class="label-heads">Date of Onboarding : <span class="lable-content">April 1, 2021</span></p>
                </div>
            </div>
		</div>
  )
}

export default CompanyDetails