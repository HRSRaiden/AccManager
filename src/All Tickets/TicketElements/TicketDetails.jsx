import React from "react";
import PdfAttachments from "./PdfAttachments";
import "./TicketEle.css";

function TicketDetails() {
	return (
		<div id="Ticket-detials-box">
			<div id="detail-Heading">
				<div style={{ padding: "0.8rem" }}>
					<span style={{ opacity: "1", fontWeight: "500" }}>
						Ticket Details{" "}
					</span>{" "}
					<span style={{ fontSize: "85%" }}>(ZS38238)</span>
				</div>
			</div>

            <div style={{margin:"auto 2% 2% 2%"}}>
                <div style={{display:"flex", justifyContent:"left"}}>
                    <p class="label-heads">Module : <span class="lable-content">Global Expansion Strategy</span></p>
                    <p class="label-heads">Date : <span class="lable-content">May 1, 2022</span></p>
                    <p class="label-heads">Title : <span class="lable-content">Expansion USA/US/UAE</span></p>
                </div>

                <div class="label-heads">
                    Description:
                    <p class="lable-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A condimentum vitae sapien pellentesque. Quis lectus nulla at volutpat diam ut venenatis tellus. Maecenas ultricies mi eget mauris pharetra et. Tellus pellentesque eu tincidunt tortor. In nibh mauris cursus mattis. 
                    Justo donec enim diam vulputate ut. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Ac auctor augue mauris augue. Dui faucibus in ornare quam viverra. Neque vitae tempus quam pellentesque nec nam aliquam. Sem viverra aliquet eget sit amet. Sapien eget mi proin sed libero.
                    </p>
                </div>

                <div style={{paddingBottom:"1%"}}>
                    <p class="label-heads">Attachments :</p>
                    <PdfAttachments />
                    <PdfAttachments />
                    <PdfAttachments />
                </div>
            </div>
		</div>
	);
}

export default TicketDetails;
