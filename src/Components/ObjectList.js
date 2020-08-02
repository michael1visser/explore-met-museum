import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ObjectList extends Component {
    constructor(props){
        super(props)
        this.state = {
            objects: []
            ,ready: false
        }
    }

    fetchData = () => {
        fetch(`${this.props.url}/objects/${this.props.dropdown}/${this.props.input}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    objects: res
                    ,ready: true
                })
            })
    }

    displayObjectList = () =>{

        let list = this.state.objects.map((val, idx) =>{
            return <Link key={idx} to={`/objects/id/${val._id}`} ><li onClick={()=> this.props.setId(val._id, "id")}>{val.title}</li></Link>
        })

        return list
    }
    componentDidMount = () =>{
        let input = ""
        let dropdown = ""
        if (this.props.input !== ""){
            input = this.props.input
            dropdown = this.props.dropdown
        }
        else {
            input = localStorage.getItem("formInput")
            dropdown = localStorage.getItem("dropdown")
        }
        this.fetchData()
        localStorage.setItem("formInput", `${this.props.input}`)
        localStorage.setItem("dropdown",`${this.props.dropdown}`)
    }

    componentDidUpdate= props => {
        if (props.input !== this.props.input){
            this.fetchData()
            localStorage.setItem("formInput", `${this.props.id}`)
            localStorage.setItem("dropdown",`${this.props.dropdown}`)
        }

    }

    render() {
        if (this.state.ready === true){
        return (
            <div>
                <ul>
                    {this.displayObjectList()}
                </ul>
            </div>
        )
        } else {return null}
    }
}

export default ObjectList
