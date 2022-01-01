import Toolbar from "@mui/material/Toolbar";
import React from "react";
import {Link} from "react-router-dom";

const style = {
  textDecoration: "none",
  padding: 1.5,
  color: "black"
}

const Routes = [
  {
    to: "/registration",
    title: "Sign Up"
  },
  {
    to: "/login",
    title: "Login"
  },
  {
    to: "/dashboard",
    title: "Dashboard"
  }
];


const Navbar = () => {
  const Route = Routes;
  return (
    <Toolbar style={{display: "flex", gap: "15%", justifyContent: "center", border:"1px solid black", padding: "0.25rem 1rem"}}>
    {Route.map( route => (
      <Link style={style} key={route.to} to={route.to}>{route.title}</Link>
    ) )
    }
    </Toolbar>
  );
}

export default Navbar;