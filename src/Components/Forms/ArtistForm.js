import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class ArtistForm extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }   

    setType = () =>{
        if (this.props.method === "POST"){
            return <h4>Please enter the details of the item to add?</h4>
        }
        if (this.props.method === "PUT"){
            return (<div> <h4>Please enter the details of the item to update?</h4>
            <Form.Control type="input" placeholder="ID (required)" name="_id" onChange={this.inputChange} />
            </div>)
        }
        if (this.props.method === "DELETE"){
            return (<div> <h4>Please enter the ID of the item to delete?</h4>
            <Form.Control type="input" placeholder="ID (required)" name="_id" onChange={this.inputChange} />
            </div>)
        }
        
    }

    setForm = () => {
        if (this.props.method !== "DELETE"){
            return ( <div>
                <Form.Control size="sm" type="input" placeholder="Name" name="name" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Gender" name="gender" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Nationality" name="nationality" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Birth Date" name="birthDate" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Death Date" name="deathDate" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Bio" name="bio" onChange={this.inputChange} />
            </div>)
        }
    }

    inputChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm = (e) =>{
        let url = ""
        if (this.props.method === "POST"){
            url = `https://met-museum-api.herokuapp.com/${this.props.type}/`
        }
        else {
            url = `https://met-museum-api.herokuapp.com/${this.props.type}/${this.state._id}`
        }
        e.preventDefault()
        const options = {
            "method": this.props.method
            ,"headers" : { "Content-Type" : "application/json"}
            ,body: JSON.stringify(this.state)
        }
        fetch(url, options)
        .then(res => res.json())
        .then(res =>{
            this.props.onSuccess({
                newId: res._id
                ,success: true
            })
        })
}

    render() {
        return (
            <Form onSubmit={this.submitForm}>
                {this.setType()}
                {this.setForm()}
                <Button style={{marginTop: 20, backgroundColor: "#B85954", border: "none"}} type="submit" >Submit</Button>
            </Form>
        )
    }
}

export default ArtistForm
