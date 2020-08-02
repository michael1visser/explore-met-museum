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
            return <h3>Please enter the details of the item to add?</h3>
        }
        if (this.props.method === "PUT"){
            return (<div> <h3>Please enter the details of the item to update?</h3>
            <Form.Control type="input" placeholder="ID (required)" name="_id" onChange={this.inputChange} />
            </div>)
        }
        if (this.props.method === "DELETE"){
            return (<div> <h3>Please enter the ID of the item to delete?</h3>
            <Form.Control type="input" placeholder="ID (required)" name="_id" onChange={this.inputChange} />
            </div>)
        }
        
    }

    setForm = () => {
        if (this.props.method !== "DELETE"){
            return ( <div>
                <Form.Control type="input" placeholder="Name" name="name" onChange={this.inputChange} />
                <Form.Control type="input" placeholder="Gender" name="gender" onChange={this.inputChange} />
                <Form.Control type="input" placeholder="Nationality" name="nationality" onChange={this.inputChange} />
                <Form.Control type="input" placeholder="Birth Date" name="birthDate" onChange={this.inputChange} />
                <Form.Control type="input" placeholder="Death Date" name="deathDate" onChange={this.inputChange} />
                <Form.Control type="input" placeholder="Bio" name="bio" onChange={this.inputChange} />
            </div>)
        }
    }

    inputChange = e =>{
        //console.log(e.target.value)
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
            //console.log(res)
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
                <Button type="submit" >Submit</Button>
            </Form>
        )
    }
}

export default ArtistForm
