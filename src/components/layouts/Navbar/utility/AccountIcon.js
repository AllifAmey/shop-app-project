import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { SvgIcon } from "@mui/material";
import Link from "@mui/material/Link";

function AccountIcon() {
  /* docs:
  
  the to property of link component checks if localstorage has username when it is clicked on,
  if it does then the link changes to /account/username/  in username would be ,
  the value found in localStorage.getItem("username")
  else go to /account/login
  
  */
  return (
    <Link
      underline="none"
      color="#343a40"
      component={RouterLink}
      to={`/account/${
        localStorage.getItem("username") == undefined
          ? "login"
          : localStorage.getItem("username")
      }`}
      display="flex"
    >
      <SvgIcon
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="20.000000pt"
        height="20.000000pt"
        viewBox="0 0 30.000000 30.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
          fill={
            localStorage.getItem("username") == undefined
              ? "#000000"
              : "#0062ff"
          }
          stroke="none"
        >
          <path
            d="M110 250 c-11 -11 -20 -31 -20 -45 0 -30 32 -65 60 -65 28 0 60 35
60 65 0 30 -32 65 -60 65 -11 0 -29 -9 -40 -20z"
          />
          <path
            d="M80 92 c-19 -9 -36 -25 -38 -34 -3 -16 7 -18 108 -18 101 0 111 2
108 18 -4 23 -64 52 -108 52 -19 0 -51 -8 -70 -18z"
          />
        </g>
      </SvgIcon>
    </Link>
  );
}

export default AccountIcon;
