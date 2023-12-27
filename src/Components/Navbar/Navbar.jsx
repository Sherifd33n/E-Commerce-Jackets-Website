import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import menu_btn from "../Assets/bx-menu.svg";
import cancel_btn from "../Assets/bx-x.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav-menu" style={{ left: showMenu && "0" }}>
        <li
          onClick={() => {
            setMenu("shop");
            setShowMenu(false);
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
            setShowMenu(false);
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/men">
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
            setShowMenu(false);
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/women">
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("children");
            setShowMenu(false);
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/children">
            Children
          </Link>
          {menu === "children" ? <hr /> : <></>}{" "}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Login
          </button>
        </Link>
      </div>
      <div className="menu-btn">
        {!showMenu ? (
          <img
            src={menu_btn}
            alt=""
            onClick={() => {
              setShowMenu(true);
            }}
          />
        ) : (
          <img
            src={cancel_btn}
            alt=""
            onClick={() => {
              setShowMenu(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
