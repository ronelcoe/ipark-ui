// import React from 'react';
// import './LandingPage.css';

// const LandingPage = () => {
// 	return (
// 	  <div className="landing-page">
// 		<header className="header">
// 		  <nav className="header-nav">
// 			<a href="#">Home</a>
// 			<a href="#">About</a>
// 			<a href="#">Services</a>
// 			<a href="#">Contact</a>
// 		  </nav>
// 		</header>
// 		{/* <main className="main-content">
// 		  <h1>Welcome to Our Landing Page</h1>
// 		  <p>
// 			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// 			Integer euismod facilisis congue. Nam euismod est libero,
// 			id dictum est dictum ac. Aliquam erat volutpat.
// 		  </p>
// 		</main> */}
// 	  </div>
// 	);
//   };
  
//   export default LandingPage;

import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
return (
	<AppBar position="static">
		<Toolbar>
		{/*Inside the IconButton, we
		can render various icons*/}
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
		>
			{/*This is a simple Menu
			Icon wrapped in Icon */}
			<MenuIcon />
		</IconButton>
		{/* The Typography component applies
		default font weights and sizes */}

		<Typography variant="h6"
			component="div" sx={{ flexGrow: 1 }}>
			iPark
		</Typography>
		<Button color="inherit" href="/register">Login</Button>
		</Toolbar>
	</AppBar>
);
}