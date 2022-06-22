import React from "react";
import LogoImg from "../resources/loginImg.png";
import goGlocal from "../resources/GoGlocalBrandlogo.png";
import signInLogo from "../resources/Sign in.png";
import "./signIn.css";
import { NavLink } from "react-router-dom";

function SignIn() {
	return (
		<div>
			<div class="loginBody">
				<div style={{ width: "50%" }}>
					<img id="login-bg-img" src={LogoImg}></img>
				</div>
				<div style={{ marginLeft: "10rem" }}>
					<div>
						<img src={goGlocal}></img>
					</div>
					<div>
						<img src={signInLogo} class="signIn-txt"></img>
					</div>
					<div style={{ width: "100%" }}>
						<form>
							<div class="form-group field-inputs">
								<input
									type="number"
									class="form-control"
									id="number-input-form"
									aria-describedby="numberHelp"
									placeholder="Enter your Number"
								/>
							</div>
							<div class="form-group field-inputs">
								<input
									type="password"
									class="form-control"
									id="password-input-form"
									aria-describedby="passwordHelp"
									placeholder="password"
								/>
							</div>
							<NavLink to="/profile">
								<div class="button-div">
									<button class="signIn-btn">Sign In</button>
									<a
										href=""
										style={{
											float: "right",
											fontSize: "90%",
											marginTop: "1rem",
										}}
									>
										Forgot Password ?
									</a>
								</div>
							</NavLink>
						</form>
					</div>
				</div>
			</div>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<p>
					By clicking 'Continue' you agreee to our{" "}
					<span style={{ color: "blue" }}>
						Terms of Service and Privacy Policy
					</span>
				</p>
			</div>
		</div>
	);
}

export default SignIn;
