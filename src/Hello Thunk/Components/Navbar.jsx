import React from "react";
import {Link} from "react-router-dom";

const style = {
  textDecoration: "none",
  padding: 1.5,
  color: "black"
}

const Routes = [
  {
    to: "/signup",
    title: "Sign Up"
  },
  {
    to: "/Login",
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
    <div style={{display: "flex", gap: "1rem", justifyContent: "center", border:"1px solid black" }}>
    {Route.map( route => (
      <Link style={style} key={route.to} to={route.to}>{route.title}</Link>
    ) )
    }
    </div>
  );
}

export default Navbar;