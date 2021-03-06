import React from 'react'
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

function Sidebar(props) {
    return (
        <Nav style={{ padding: "30px 10px", backgroundColor: "#F5F5F5"/* , height: "100%"  */}}>
            <Nav.Item>
                <h4 style={{ textDecoration: "underline" }}>Browse Collection</h4>
                
                <Nav.Link as={Link} to="/objects/random" onClick={() => props.setId()}>Random Object</Nav.Link>
                <Nav.Link as={Link} to="/objects/department/list" onClick={() => props.selectList("department")}>Departments</Nav.Link>
                <Nav.Link as={Link} to="/objects/medium/list" onClick={() => props.selectList("medium")}>Media</Nav.Link>
                <Nav.Link as={Link} to="/objects/category/list" onClick={() => props.selectList("category")}>Categories</Nav.Link>
                <Nav.Link as={Link} to="/objects/culture/list" onClick={() => props.selectList("culture")}>Cultures</Nav.Link>
                
                <h4 style={{ textDecoration: "underline" }}>Advanced</h4>
                <Nav.Link as={Link} to="/new/" >Add New Object or Artist</Nav.Link>
                <Nav.Link as={Link} to="/update" >Update an Object or Artist</Nav.Link>
                <Nav.Link as={Link} to="/delete" >Delete an Object or Artist</Nav.Link>
                </Nav.Item>
        </Nav>
    )
}

export default Sidebar
