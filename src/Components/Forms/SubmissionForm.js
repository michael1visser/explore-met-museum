import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import ObjectForm from './ObjectForm'
import ArtistForm from './ArtistForm'
 
export class AddNewForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            newId: ""
            ,success: ""
            ,type: ""
            ,method: this.props.method
        }
        this.baseState = {
            newId: ""
            ,success: ""
            ,type: ""
            ,method: this.state.method
        }
    }

    onSuccess = success => {
        console.log("success fired")
        this.setState({
            success: success.success
            ,newId: success.newId
        })
    }

    successDisplay = () => {
        if (this.props.method === "POST"){
            return <div style={{margin: 20}}>
            <h3>Success! The new item ID is {this.state.newId}</h3>
            <Button style={{marginTop: 20, backgroundColor: "#B85954", border: "none"}} type="button" onClick={this.resetPage}>Submit Another New Item</Button>
            </div>
        }
        if (this.props.method === "PUT"){
            return <div style={{margin: 20}}>
            <h3>Success! Item {this.state.newId} has been updated.</h3>
            <Button style={{marginTop: 20, backgroundColor: "#B85954", border: "none"}} type="button" onClick={this.resetPage}>Submit Another Update</Button>
            </div>
        }
        if (this.props.method === "DELETE"){
            return <div style={{margin: 20}}>
            <h3>Success! Item {this.state.newId} has been deleted.</h3>
            <Button style={{marginTop: 20, backgroundColor: "#B85954", border: "none"}} type="button" onClick={this.resetPage}>Delete Another Item</Button>
            </div>
        }
    }

    setFormType = e =>{
        e.preventDefault()
        this.setState({
            type: e.target.value
        })
    }

    resetPage = () => {
        console.log("fired")
        this.setState(this.baseState)
    }

    formType = () =>{
        if (this.props.method === "POST"){
            return <h3>What type of item would you like to add?</h3>
        }
        if (this.props.method === "PUT"){
            return <h3>What type of item would you like to update?</h3>
        }
        if (this.props.method === "DELETE"){
            return <h3>What type of item would you like to delete?</h3>
        }
        
    }

    displayForm = () => {

        if (this.state.type === "objects"){
            return <ObjectForm type={this.state.type}  method={this.state.method} onSuccess={this.onSuccess} />
            
        }
        else if (this.state.type === "artists"){
            return <ArtistForm type={this.state.type} method={this.state.method} onSuccess={this.onSuccess} />
        }
        else {return null}
    }

    render() {
        if (this.state.success !== true){
        return (<div style={{ width: "60%", marginLeft: 20}}>
            {this.formType()}
            <Form>
                <Form.Control size="sm" as="select" id="basic-nav-dropdown" name="type" onChange={this.setFormType}>
                    <option>Select One</option>
                    <option value="objects">Object</option>
                    <option value="artists">Artist</option>
                </Form.Control>   
            </Form>
            {this.displayForm()} 
            </div>
        )
        }
        else {return this.successDisplay()}
    }
}

export default AddNewForm
