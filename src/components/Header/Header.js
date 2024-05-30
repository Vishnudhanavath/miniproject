import { Component } from "react";
import { GoSearch } from "react-icons/go";
import { MdHome } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";
import "./Header.css"
import { Link } from "react-router-dom";
class Header extends Component {
    render(){
    return (
       <nav className  = "nav-bar">
        <div className = "nav-container">
            <Link to = "/">
            <div>
                <img src="/assets/logo.png" className="logo" alt = "logo"/>
            </div>
            </Link>

        <div className="second-section">
        <div className = "search-container">
          <GoSearch  className="search-logo"/>
          <input type = "text"  className = "user-search" placeholder = "Search a Book"/>
        </div>
        <div className="nav-third-section">
          <ul className = "nav-menu">
            <Link to = "/home" className="active">
            <li className = "list-items"> <MdHome className="icons"/> <span>Home</span></li>
            </Link>
            <Link to = "/books" className="active"   >
            <li className = "list-items"><FaBookOpen className="icons"/> <span>Books</span></li>
            </Link>
            <Link to = "/login">
            <li  className = "list-items">
            <button type = "button" className = "login-btn">
                Login
            </button>   
            </li>
            </Link>
          </ul>
        </div>
          </div>
        </div>
       </nav>
    )
    }
}

export default  Header
