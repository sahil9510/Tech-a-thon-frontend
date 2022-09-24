import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { Avatar, Button } from "@mui/material";
import '../Styles/Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {


	
  return (
    <div>
        <div className="nav" >
			<Link to="/">
				<div className="nav-logo">
					{/* <img src="" alt="logo" /> */}
					<h2>Kuch Bhi</h2>
				</div>
			</Link>
			<div className="nav-search">
			</div>
			<div>
				{true ? (
					<div
					style={{
						display: "flex",
						jusitfyContent: "space-around",
						alignItems: "center",
						gap: "20px",
					}}>
						<Link to="/messages">
							<div></div>
						</Link>
						<Link to="/bookinglist">
							<div>Bookings</div>
						</Link>
						<Link to="/favorite">
							<div>Favorites</div>
						</Link>
						<Link to="/listing">
							<div>List Your Site</div>
						</Link>
						<Button
							aria-controls="simple-menu"
							aria-haspopup="true"
							>
							
						</Button>
						{/* <Menu
							id="simple-menu"
							keepMounted
							onClose={handleClose}
							getContentAnchorEl={null}
							anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
							transformOrigin={{ horizontal: "center" }}>
							<MenuItem>Hi</MenuItem>
							<MenuItem >Account Settings</MenuItem>
							<MenuItem >Logout</MenuItem>
						</Menu> */}
					</div>
				) : (
					<div
						style={{
							display: "flex",
							jusitfyContent: "space-around",
							alignItems: "center",
							gap: "20px",
						}}>
						<div>List your places</div>
						<Link to={"/signin"} state={{ isSignIn: true }}>
							Sign In
						</Link>
						<Link to={"/signin"} state={{ isSignIn: false }}>
							Sign Up
						</Link>
					</div>
				)}
			</div>
		</div>
    </div>
  )
}

export default Navbar