import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Container, Row, Col, FormControl} from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import SearchForm from './SearchForm'

function TopNav(props){


    return(
            <Navbar className="justify-content-between">
                <style type="text/css">
                    {`
                    .navbar {
                        background-color: #B85954;
                        margin: 0, auto;
                    }
                    `}
                </style>
                <Navbar.Brand><h2>Met Museum</h2></Navbar.Brand>
                
                <SearchForm sendInput={props.sendInput}/>
                
            </Navbar>
    )
}

export default TopNav
