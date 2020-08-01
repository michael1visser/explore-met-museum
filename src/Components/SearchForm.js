import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'


export class SearchForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: ""
            ,dropdown: ""
        }
    }

    inputChange = (e)=> {
        console.log(e.target.value)
        this.setState({
            input: e.target.value
        })
    }

    dropdownChange = e => {
        this.setState({
            dropdown: e.target.value
        })
    }

    submitForm = (e)=> {
        e.preventDefault()
        console.log(e)
        this.props.sendInput(this.state.input)
    }
    render() {
        return (
            <Form  onSubmit={this.submitForm}>
                <Form.Control as="select" title="Select an area to search" id="basic-nav-dropdown" onChange={this.dropdownChange}>
                    <option>Select an area to Search</option>
                    <option value="department">Departments</option>
                    <option value="media">Media</option>
                    <option value="category">Categories</option>
                    <option value="culture">Cultures</option>
                </Form.Control>
                <Form.Control type="input" onChange={this.inputChange} />
                <Button as={Link} to={`/objects/${this.state.dropdown}/${this.state.input}`}type="submit">Search</Button>
            </Form>
        )
    }
}

export default SearchForm
