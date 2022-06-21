import React from "react";
import "../profile.css";

function EditProfileBody() {
	return (
		<div style={{ fontFamily: "poppins" }}>
			<div class="above-navbar">
				<span class="section-heading" style={{ fontSize: "170%" }}>
					{" "}
					Edit Profile{" "}
				</span>
			</div>
			<div>
				<img
					style={{ borderRadius: "50%", width: "20%", height: "12rem" }}
					src="https://m.economictimes.com/thumb/msid-79122020,width-1200,height-900,resizemode-4,imgsize-453087/sathish-gopalaiah-2.jpg"
					alt="User phot"
				></img>
			</div>

			<form style={{ marginTop: "5%", marginBottom:"5%" }}>
				<div
					style={{ display: "flex", justifyContent: "left", fontSize: "75%" }}
				>
					<div style={{ width: "100%" }}>
						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">
								First Name
							</label>
							<input
								type="text"
								class="form-control"
								id="exampleInputEmail1"
								defaultValue="Danta Tojeing"
								aria-describedby="emailHelp"
								style={{ fontSize: "110%" }}
							/>
						</div>
						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">
								Last Name
							</label>
							<input
								type="text"
								class="form-control"
								id="exampleInputEmail1"
								defaultValue="Harimaku"
								aria-describedby="emailHelp"
								style={{ fontSize: "110%" }}
							/>
						</div>
						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">
								Date of Birth
							</label>
							<input
								type="date"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								style={{ fontSize: "110%" }}
							/>
						</div>
						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">
								Email address
							</label>
							<input
								type="email"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								defaultValue="Harimaku@gmail.com"
								style={{ fontSize: "110%" }}
							/>
						</div>
					</div>
					<div style={{ marginLeft: "3rem", width: "100%" }}>
						<div class="mb-3">
							<label for="exampleInputPassword1" class="form-label">
								Mobile
							</label>
							<input
								type="number"
								class="form-control"
								id="exampleInputPassword1"
								defaultValue="209921990"
								style={{ fontSize: "110%" }}
							/>
						</div>
						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">
								Company
							</label>
							<input
								type="text"
								class="form-control"
								id="exampleInputEmail1"
								defaultValue="Sprinter"
								aria-describedby="emailHelp"
								style={{ fontSize: "110%" }}
							/>
						</div>
					</div>
				</div>

				<div style={{marginTop:"5%"}}>
					<span style={{ marginRight: "3%", fontSize:"85%" }}>
						Two Step Authentication Process:
					</span>
					<label class="switch">
						<input type="checkbox" />
						<span class="slider round"></span>
					</label>
				</div>

				<button type="submit" class="btn btn-primary" id="edit-profile-save-btn" style={{marginTop:"5%"}}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default EditProfileBody;
