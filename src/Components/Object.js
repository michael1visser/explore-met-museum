import React, { Component } from 'react'
import { json } from 'body-parser'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'


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

    fetchRandom = () => {
                fetch(`${this.props.url}/objects/id/${this.props.id}`)
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
                        })
                    })
         
      }

    componentDidMount = () =>{
        this.fetchRandom() 
    }

    componentDidUpdate = props => {
        if (props.id !== this.props.id){
            this.fetchRandom()
        }
    }
    
    
    render() {
        if (this.state.ready == true){
            return (
                <Container>
                    <Row>
                        <Image src={this.state.primaryImage} />
                    </Row>
                    <Row><h2>{this.state.title}</h2></Row>

                </Container>
            )
        } else{return null}
    }
}

export default Object

