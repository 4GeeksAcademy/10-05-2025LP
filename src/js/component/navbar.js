import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                MAFL
            </Link>
            <div className="contbut">
                <Link to="/" className="nav-link">
                    Home
                </Link>
                <Link to="/demo" className="btn Signin">Signin</Link>
                <Link to="/login" className="btn Login">Login</Link>
            </div>
        </nav>
    );
};




// export const Navbar = () => {
// 	return (
// 	  <div className="navbar">
// 		<div className="frame">
// 		  <Button>Sign-up</Button>
// 		</div>
// 		<div className="div-wrapper">
// 		  <div className="div">Log-in</div>
// 		</div>
// 		<div className="text-wrapper-2">Home</div>
// 		<div className="text-wrapper-3">MAFL</div>
// 	  </div>
// 	);
//   };
