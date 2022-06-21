import React from 'react'
import UserInfo from './UserInfo';
import "./profile.css";

function ProfileBody() {
  return (
		<div style={{ fontFamily: "poppins" }}>
			<div class="above-navbar">
				<span class="section-heading" style={{ fontSize: "170%" }}>
					{" "}
					Profile{" "}
				</span>
			</div>
			<div>
				<img
					style={{ borderRadius: "50%", width: "20%", height: "12rem" }}
					src="https://m.economictimes.com/thumb/msid-79122020,width-1200,height-900,resizemode-4,imgsize-453087/sathish-gopalaiah-2.jpg"
					alt="User Image"
				></img>
			</div>

			<UserInfo />

			<div>
            <span style={{marginRight:"3%"}}>Two Step Authentication Process:</span>
            <label class="switch">
				<input type="checkbox" />
				<span class="slider round"></span>
			</label>
            </div>

			<div style={{ marginTop: "25%", marginBottom: "5%" }}>
				<button id="acc-manager-log-out-btn" onClick="">
					<i class="fa-solid fa-arrow-right-from-bracket" style={{marginRight:"1rem"}}></i>LogOut
				</button>
			</div>
		</div>
	);
}

export default ProfileBody