import React, { Component } from 'react'
import { Container, Row, Col, Badge, Card, Accordion } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import ImageGallery from './ImageGallery'


export class Object extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: ""
            ,featured: null
            ,yearAcquired: ""
            ,isPublicDomain: null
            ,primaryImage: ""
            ,primaryImageSmall: ""
            ,additionalImages: []
            ,department: ""
            ,objectType: ""
            ,title: ""
            ,culture: ""
            ,period: ""
            ,artist: ""
            ,dateCreated: ""
            ,medium: ""
            ,dimensions: ""
            ,country: ""
            ,category: ""
            ,rights: ""
            ,infoLink: ""
            ,ready: false
        }
        
    }

    fetchObject = (id) => {
                fetch(`${this.props.url}/objects/id/${id}`)
                    .then(res => res.json())
                    .then(res =>{
                        this.setState({
                            id: res._id
                            ,featured: res.featured
                            ,yearAcquired: res.yearAcquired
                            ,isPublicDomain: res.isPublicDomain
                            ,primaryImage: res.primaryImage
                            ,primaryImageSmall: res.primaryImageSmall
                            ,additionalImages: res.additionalImages
                            ,department: res.department
                            ,objectType: res.objectType
                            ,title: res.title
                            ,culture: res.culture
                            ,period: res.period
                            ,artist: res.artist
                            ,dateCreated: res.dateCreated
                            ,medium: res.medium
                            ,dimensions: res.dimensions
                            ,country: res.country
                            ,category: res.category
                            ,rights: res.rights
                            ,infoLink: res.infoLink
                            ,ready: true
                            ,artistBio: ""
                            ,artistNationality: ""
                            ,artistBirthDate: ""
                            ,artistDeathDate: ""
                            ,artistGender: ""
                            ,artistReady: false
                        })
                    })

         
      }

      fetchArtistInfo = () => {
          fetch(`${this.props.url}/artists/name/${this.state.artist}`)
            .then(res => res.json())
            .then(res =>{
                if (res[0] !== undefined){
                this.setState({
                    artistBio: res[0].bio
                    ,artistNationality: res[0].nationality
                    ,artistBirthDate: res[0].birthDate
                    ,artistDeathDate: res[0].deathDate
                    ,artistGender: res[0].gender
                    ,artistReady: true
                })
            }
            })
            if(this.state.artistReady === true) {
            return( <div >
                {this.state.artistGender !== "" ? <p>Gender: {this.state.artistGender}</p> : null}
                {this.state.artistNationality !== "" ?<p>Nationality: {this.state.artistNationality}</p> : null}
                {this.state.artistBirthDate !== "" || this.state.artistBirthDate !== null ? <p>DOB: {this.state.artistBirthDate}</p> : null}
                {this.state.artistDeathDate !== "" || this.state.artistDeathDate !== null ? <p>DOD: {this.state.artistDeathDate}</p> : null}
                {this.state.artistBio !== "" ? <p>{this.state.artistBio}</p> : null}
                </div>
            )
            } else {return null}
      }

    componentDidMount = () =>{
        let objectId = ""
        if(this.props.id !== ""){
            objectId = this.props.id
        }
        else {
            objectId = localStorage.getItem("objectId")
        }
        this.fetchObject(objectId) 
        localStorage.setItem("objectId", `${this.props.id}`)
        localStorage.setItem("dropdown","id" )
    }

    componentDidUpdate = props => {
        if (props.id !== this.props.id){
            this.fetchObject(this.props.id)

            localStorage.setItem("objectId", `${this.props.id}`)
            localStorage.setItem("dropdown","id" )
        }
    }
    
    
    render() {
        if (this.state.ready === true){
            return (
                <Container className="justify-content-center" style={{marginTop: 20, marginLeft: 20}}>
                    <Row className="justify-content-center">
                        <Col>
                            <Row className="justify-content-center">                        
                                <h6>Object ID: {this.state.id}</h6>
                            </Row>
                            <Row className="justify-content-center">                        
                                <h3>{this.state.title}</h3>
                            </Row>
                            <Row className="justify-content-center">
                                {this.state.isPublicDomain === true ? <h4><Badge variant="primary">  Public Domain</Badge></h4> : null}
                                {this.state.featured === true ? <h5><Badge variant="primary">  Featured</Badge></h5> : null}
                            </Row>
                            <Row>
                                <Col xs="4" />
                                    <Col>
                                        <Image fluid src={this.state.primaryImage} />
                                    </Col>
                                    <Col xs="4" />
                            </Row>
                            <Row className="justify-content-center">
                                {this.state.dimensions !== "" && this.state.dimensions !== undefined ? <h5>Dimensions: {this.state.dimensions}</h5> : null} 
                            </Row>
                            <Row className="justify-content-center">
                                {this.state.culture !== "" && this.state.culture !== undefined ? <h4>Culture: {this.state.culture}</h4> : null} 
                            </Row>
                            <Row className="justify-content-center">
                                {this.state.department !== "" && this.state.department !== undefined ? <h4>Department: {this.state.department}</h4> : null} 
                            </Row>
                            <Row className="justify-content-center">
                                {this.state.medium !== "" && this.state.medium !== undefined ? <h4>Medium: {this.state.medium}</h4> : null} 
                            </Row>
                            <Row className="justify-content-center">
                                {this.state.category !== "" && this.state.category !== undefined ? <h4>Category: {this.state.category}</h4> : null} 
                            </Row>
                            <Row className="justify-content-center">
                                {this.state.dateCreated !== "" && this.state.dateCreated !== undefined ? <h5>Date Created: {this.state.dateCreated}</h5> : null} 
                                {this.state.period !== "" && this.state.period !== undefined ? <h5>Period: {this.state.period}</h5> : null} 
                                {this.state.country !== "" && this.state.country !== undefined ? <h5>Country of Origin: {this.state.country}</h5> : null} 
                            </Row>
                            <Row className="justfiy-content-center">
                                {this.state.additionalImages !== "" && this.state.additionalImages !== undefined ?<ImageGallery images={this.state.additionalImages} /> : null }
                            </Row>
                        </Col>
                        <Col xs="4">
                            <Row className="justify-content-center">
                                {this.state.artist !== "" && this.state.artist !== undefined ? 
                                    <Accordion >
                                        <Card style={{backgroundColor: "#B85954"}}>
                                            <Card.Header >
                                                <Accordion.Toggle style={{backgroundColor: "#f5eba5"}} as={Card.Header} variant="link" eventKey="0">
                                                <h5>Artist: {this.state.artist}</h5>
                                                </Accordion.Toggle >
                                            </Card.Header>        
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body style={{color: "#f5eba5"}}>{this.fetchArtistInfo()}</Card.Body>
                                            </Accordion.Collapse>                        
                                        </Card>
                                    </Accordion>
                                : null} 
                            </Row>
                        </Col>
                    </Row>
                </Container>
            )
        } else{return null}
    }
}

export default Object

