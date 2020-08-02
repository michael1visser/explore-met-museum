import React from 'react'
import Container from 'react-bootstrap/Container'

function Home() {
    return (
        <Container className="justify-content-center" style={{ marginTop: 20}}>
            <h1 style={{textAlign: "center", marginTop: 20}}>Welcome to The Met Online</h1><br/>
            <h2>To search for a specific item, use the dropdown menu in the header.</h2><br/>
            <h2>Not sure what you're looking for? Click one of the area links to the left to browse the collection. Once you find the right area, you can use the dropdown menu to search for items in that area.</h2>
            <h6 style={{position: "fixed", bottom: 10}}>Metropolitan Museum of Art • 1000 5th Ave, New York, NY 10028 • <a href="https://metmuseum.org" style={{color: "#000000"}}>metmuseum.org</a></h6>
            
        </Container>
    )
}

export default Home
