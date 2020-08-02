import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import SearchForm from './SearchForm'
import { Link } from 'react-router-dom'

function TopNav(props){


    return(
            <Navbar style={{backgroundColor: "#B85954", height: "100%"}} className="justify-content-between">
                <Navbar.Brand as={Link} to="/" style={{padding:20, color: "#f5eba5"}}><h1>Metropolitan Museum of Art</h1></Navbar.Brand>
                
                <SearchForm sendInput={props.sendInput}/>
                
            </Navbar>
    )
}

export default TopNav
