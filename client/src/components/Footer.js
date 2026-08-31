import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div className="footer-container">
			<div className="company-logo">
				<Link to="/" className="footer-logo">
					<i className="fas fa-money-check-alt"></i>
				</Link>
			</div>

			<div className="copyrights">
				<p>© Copyright 2026. All rights reserved</p>
			</div>

			<div className="social-media">
				Made by Manmeet Santre
			</div>
		</div>
	);
}
