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

        fetch(`${this.url}/objects/${this.props.listName}`)
            .then(res => res.json())
            .then( res => {
                console.log(res)
                this.setState({
                    items: res
                })
            })
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
        }
    }


    setList(){
        let listItems = this.state.items.map((val, idx) => {
            return <li key={idx}>{val}</li>
        })
        return listItems
    }

    render() {  
        return (
            <div>
                {this.setList()}
            </div>
        )
    }
}

export default List

