import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import SearchForm from './SearchForm'
import { Link } from 'react-router-dom'
import bgImage from '../../images/met.jpg'

function TopNav(props){


    return(
            <Navbar style={{ height: "100%" , borderBottom: "3px solid #333333", backgroundImage: `url(${bgImage})`, backgroundPosition: "center"}} className="justify-content-between">
                <Navbar.Brand as={Link} to="/" style={{padding:20, color: "#ffffff"}}><h1>Metropolitan Museum of Art</h1></Navbar.Brand>
                
                <SearchForm sendInput={props.sendInput}/>
                
            </Navbar>
    )
}

export default TopNav
