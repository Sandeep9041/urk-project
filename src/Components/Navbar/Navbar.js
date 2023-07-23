import {HiOutlineSearch} from "react-icons/hi"
import {GoHome} from "react-icons/go"
import {FaRegListAlt,FaRegNewspaper} from "react-icons/fa"
import { BsPerson} from "react-icons/bs"
import {BiBell} from "react-icons/bi"
import {TbLogout} from "react-icons/tb"
import "./navbar.css"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { useState } from "react"

const Navbar =() => {
const {pathname} = useLocation()
const [pathvalue,setPathvalue] = useState(pathname)
console.log(pathname)
return(
    <div className="navbar">
        <div className="icon-search-card">
        <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1690019773/001-butterfly_eclgpe.png"
        alt="" className="nav-img"/>
        <HiOutlineSearch className="search-icon"/>
        </div>
        <div className="navs">
            <div className="nav-links">
            <Link to="/" >
                <button className="nav-button" type="button" style={{backgroundColor:pathvalue==="/" ? "blue":"",color:pathvalue==="/"?"#ffffff":"#919492",fontSize:pathvalue==="/"?"19px":"17px"}}>
                <GoHome className="nav-icon"/> 

                </button>
            </Link>
            <Link to="/news"  >
            <button  className="nav-button" type="button" style={{backgroundColor:pathvalue==="/news" ? "#2a52be":"",color:pathvalue==="/news"?"#ffffff":"#919492",fontSize:pathvalue==="/news"?"19px":"17px"}}>
                <FaRegNewspaper className="nav-icon"/>
                </button>
            </Link>
            <Link to="/list">
            <button  className="nav-button" type="button" style={{backgroundColor:pathvalue==="/list" ? "#2a52be":"",color:pathvalue==="/list"?"#ffffff":"#919492",fontSize:pathvalue==="/list"?"19px":"17px"}}>
                <FaRegListAlt className="nav-icon"/>
                </button>
            </Link>
            <Link to="/profile">
            <button  className="nav-button" type="button" style={{backgroundColor:pathvalue==="/profile" ? "#2a52be":"",color:pathvalue==="/profile"?"#ffffff":"#919492",fontSize:pathvalue==="/profile"?"19px":"17px"}}>
                <BsPerson className="nav-icon"/>
            </button>
            </Link>
            </div>
        </div>
        <div className="logout-card">
            <BiBell style={{color:"#919492",fontSize:"17px",marginBottom:"25px"}}/>
            <TbLogout  style={{color:"#919492",fontSize:"17px",marginBottom:"15px"}}/>
        </div>

    </div>
)}
export default Navbar;