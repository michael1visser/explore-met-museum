import React, { Component } from 'react'

export class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            listName: this.props.listName
            ,items: []
        }
        this.url = this.props.url
    }

    componentDidMount(){
        let listName = ""
        let path = window.location.pathname
        //console.log(path)
        if (this.props.listName !== ""){
            listName = this.props.listName
        }
        else {
            listName = localStorage.getItem("listName")
        }
        fetch(`${this.url}/objects/${listName}`)
            .then(res => res.json())
            .then( res => {
                this.setState({
                    items: res
                })
            })

            localStorage.setItem("listName", `${this.props.listName}`)

    }

    componentDidUpdate(props){
   
        if (props.listName !== this.props.listName){
        
            fetch(`${this.url}/objects/${this.props.listName}`)
                .then(res => res.json())
                .then( res => {
                    console.log(res)
                    this.setState({
                        items: res
                    })
                })

            localStorage.setItem("listName", `${this.props.listName}`)
        }
    }


    setList(){
        let listItems = this.state.items.map((val, idx) => {
            if (val != ""){
            return <li key={idx}>{val}</li>
            }
        })
        return listItems
    }

    render() {  
        return (
            <div style={{overflow: "scroll",paddingLeft: 20}}>
                <ul style={{listStyle: "none", fontSize: "20px", paddingTop: 20}}>
                {this.setList()}
                </ul>
            </div>
        )
    }
}

export default List

