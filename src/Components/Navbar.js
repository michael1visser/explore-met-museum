import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Container, Row, Col, FormControl} from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import SearchForm from './SearchForm'

function TopNav(props){


    return(
            <Navbar style={{backgroundColor: "#B85954", height: "100%"}} className="justify-content-between">
                <Navbar.Brand style={{padding:20, color: "#f5eba5"}}><h1>Metropolitan Museum of Art</h1></Navbar.Brand>
                
                <SearchForm sendInput={props.sendInput}/>
                
            </Navbar>
    )
}

export default TopNav
