import React from 'react'
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import {LinkContainer} from 'react-router-bootstrap'

function Sidebar(props) {
    return (
        <Nav>
            <Nav.Item>
                <h3>Browse Collection</h3>
                
                <Nav.Link as={Link} to="/objects/random" onClick={() => props.setId()}>Random Object</Nav.Link>
                <Nav.Link as={Link} to="/objects/department" onClick={() => props.selectList("department")}>Departments</Nav.Link>
                <Nav.Link as={Link} to="/objects/medium" onClick={() => props.selectList("medium")}>Media</Nav.Link>
                <Nav.Link as={Link} to="/objects/category" onClick={() => props.selectList("category")}>Categories</Nav.Link>
                <Nav.Link as={Link} to="/objects/culture" onClick={() => props.selectList("culture")}>Cultures</Nav.Link>
                
                <h3>Advanced</h3>
                </Nav.Item>
        </Nav>
    )
}

export default Sidebar
