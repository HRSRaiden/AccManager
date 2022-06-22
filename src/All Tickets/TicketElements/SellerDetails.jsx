import React from "react";

function SellerDetails() {
	return (
		<div id="Seller-detials-box">
			<div id="detail-Heading">
				<div style={{ padding: "0.8rem" }}>
					<span style={{ opacity: "1", fontWeight: "500" }}>
						Seller Details{" "}
					</span>{" "}
				</div>
			</div>

			<div style={{ margin: "auto 2% 2% 2%" }}>
				<div style={{ display: "flex", justifyContent: "left" }}>
					<p class="label-heads">
						Company Name : <span class="lable-content">ABC Ltd.</span>
					</p>
					<p class="label-heads">
						Company Representative :{" "}
						<span class="lable-content">Madhav Singh</span>
					</p>
					<p class="label-heads">
						Company e-mail : <span class="lable-content">company@gmail</span>
					</p>
				</div>

				<div class="label-heads" style={{ paddingBottom: "1%" }}>
					Comapny Contact : <span class="lable-content">9971423685</span>
				</div>
			</div>
		</div>
	);
}

export default SellerDetails;
