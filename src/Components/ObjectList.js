import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ObjectList extends Component {
    constructor(props){
        super(props)
        this.state = {
            objects: []
            ,ready: false
        }
        this.input = ""
        this.dropdown = ""
    }

    fetchData = () => {
        fetch(`${this.props.url}/objects/${this.dropdown}/${this.input}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    objects: res
                    ,ready: true
                }/* , () => {this.displayObjectList()} */)
            })

    }

    displayObjectList = () =>{

        let list = this.state.objects.map((val, idx) =>{
            return <Link key={idx} to={`/objects/id/${val._id}`} ><li onClick={()=> this.props.setId(val._id, "id")}>{val.title}</li></Link>
        })

        return list
    }
    componentDidMount = () =>{
        //let objectList = ""
        if (this.props.input !== ""){
            this.input = this.props.input
            this.dropdown = this.props.dropdown
            
        }
        else {
            this.input = localStorage.getItem("formInput")
            this.dropdown = localStorage.getItem("dropdown")
            //objectList = localStorage.getItem("objectList")
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
                <ul style={{listStyle: "none", fontSize: "20px", paddingTop: 20}} >
                    {this.displayObjectList()}
                </ul>
            </div>
        )
        } else {return null}
    }
}

export default ObjectList
