import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class ObjectForm extends Component {
    constructor(props){
        super(props)
        this.state = {}
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
            return ( <div >
                <Form.Control size="sm" type="input" placeholder="Title" name="title" onChange={this.inputChange} />
                <h5>Is this item in the public domain?</h5>
                <Form.Check inline size="sm" type="radio" name="isPublicDomain" label="Yes"  onClick={() => this.setCheckbox("isPublicDomain", true)} />
                <Form.Check inline size="sm" type="radio" name="isPublicDomain" label="No"  onClick={() => this.setCheckbox("isPublicDomain", false)} />
                <h5>Should this item be featured?</h5>
                <Form.Check inline size="sm" type="radio" name="featured" label="Yes"  onClick={() => this.setCheckbox("featured", true)} />
                <Form.Check inline size="sm" type="radio" name="featured" label="No"  onClick={() => this.setCheckbox("featured", false)} />
                <Form.Control size="sm" type="input" placeholder="Primary Image URL" name="primaryImage" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Dimensions" name="dimensions" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Culture" name="culture" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Department" name="department" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Medium" name="medium" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Category" name="category" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Date Created" name="dateCreated" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Period" name="period" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Country" name="country" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Additional Image URLS (separate by comma)" name="additionalImages" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Artist" name="artist" onChange={this.inputChange} />
            </div>)
        }
    }

    inputChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    setCheckbox = (name, value) =>{
        this.setState({
            [name]: value
        })
    }

    checkImages = (e) => {
        e.preventDefault()
        if (this.state.additionalImages){
            let imgArray = this.state.additionalImages.split(",")
             let finalArray = imgArray.map(val =>{
                let trimmed = val.trim()
                return trimmed
            })
             this.setState({
                 additionalImages: finalArray
             }, () => {this.submitForm(e)})
        } else {this.submitForm(e)}

    }
    submitForm = (e) =>{
        
        let url = ""
        if (this.props.method === "POST"){
            url = `https://met-museum-api.herokuapp.com/${this.props.type}/`
        }
        else {
            url = `https://met-museum-api.herokuapp.com/${this.props.type}/${this.state._id}`
        }
        
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
            <Form onSubmit={this.checkImages}>
                {this.setType()}
                {this.setForm()}
                <Button type="submit" >Submit</Button>
            </Form>
        )
    }
}

export default ObjectForm
