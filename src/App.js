import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'

import Navbar from './Components/Layout/Navbar'
import Sidebar from './Components/Layout/Sidebar'
import Object from './Components/Objects/Object'
import Home from './Components/Layout/Home'
import {Route} from 'react-router-dom'
import FieldList from './Components/FieldList'
import ObjectList from './Components/Objects/ObjectList'
import SubmissionForm from './Components/Forms/SubmissionForm';

let url = "https://met-museum-api.herokuapp.com"

class App extends Component {
  constructor(){
    super()
    this.state = {
      browseSelection: ""
      ,dropdownSelection: ""
      ,formInput: ""
      ,objectId: ""
    }
    this.path = window.location.pathname
    
  }

  setStateFromUrl = () =>{
    let pathArray = this.path.split('/')
    pathArray = pathArray.filter(val => (val !== ""))
    if (pathArray[1] === "random"){
      this.fetchRandomId()
    }
    if (pathArray[2] === "list"){
      this.setState({
        browseSelection: pathArray[1]
      })
    }
    if (pathArray[1] === "id"){
      this.setState({
        dropdownSelection: "id"
        ,formInput: pathArray[2]
      })
    }
  }
  

  componentDidMount = () =>{
    

    this.setStateFromUrl()

  }
  selectList = listName => {
    this.setState({
      browseSelection: listName
    })
  }

  setDropdown = selection =>{
    this.setState({
      dropdownSelection: selection
    })
  }

  setFormSelection = (input, optional) =>{
    if (input.input !== undefined){
    this.setState({
      dropdownSelection: input.dropdown
      ,formInput: input.input
    })    
  }
  else {
    this.setState({
      formInput: input
      ,dropdownSelection: optional
    })
  }
  }

  setObjectId = id => {
    this.setState({
      objectId: id
    })
  }

  fetchRandomId = () => {
    fetch(`${url}/objects/random`)
      .then(res => res.json())
      .then(res =>{
        this.setState({
          objectId: res._id
        })
        
      })
  }

  render() {
  return (
    <Container fluid style={{ padding: 0 }} >
     
      <Row style={{height: "15%"}} noGutters className="row-bottom-margin"> 
        <Col row-bottom-margin="true" >
          <Navbar dropdownSelection={this.setDropdown} sendInput={this.setFormSelection} />
        </Col>
      </Row>
      <Row style={{height: "85%"}} noGutters >
        <Col xs="2" >
        <Sidebar selectList={this.selectList} setId={this.fetchRandomId} 
        />
        </Col >
        <Col style={{height: "100%" ,overflow: "scroll", borderTop: "12px groove #b63d37", borderLeft: "12px ridge #b63d37", outlineTop: "#FFFFFF"}}>
          <Route path="/"
            component={Home}
            exact />
          <Route path ={`/objects/${this.state.browseSelection}/list`} 
            render={() => <FieldList listName={this.state.browseSelection} url={url} />}
      
          />
          <Route path={`/objects/random`}
            render={() => <Object url={url} id={this.state.objectId} />} 
            exact
          />
          <Route path={`/objects/${this.state.dropdownSelection}/${this.state.formInput}`} 
              render={() => {
                  if(this.state.dropdownSelection === "id"){
                    return  <Object url={url} id={this.state.formInput} />
                  }
                  else{
                    return <ObjectList url={url} dropdown={this.state.dropdownSelection} input={this.state.formInput} setId={this.setFormSelection} />
                }
              }
            }/> 
            <Route path="/new"
            render={() => <SubmissionForm  method="POST"/>}
            />
            <Route path="/update"
            render={() => <SubmissionForm  method="PUT"/>}
            />
            <Route path="/delete"
            render={() => <SubmissionForm  method="DELETE" />}
            />
        </Col>
      </Row>
    </Container>
  );
  }
}

export default App;
