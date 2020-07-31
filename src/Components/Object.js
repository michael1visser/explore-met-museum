import React, { Component } from 'react'



export class Object extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: ""
            ,featured: ""
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

    componentDidMount(props){
        
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Object

