import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'

import TopNav from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Object from './Components/Object'
import Home from './Components/Home'
import {Route, Link} from 'react-router-dom'
import FieldList from './Components/FieldList'
import ObjectList from './Components/ObjectList'

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

  setFormSelection = input =>{
    this.setState({
      dropdownSelection: input.dropdown
      ,formInput: input.input
    })    
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

  render(routerProps) {
  return (
    <Container fluid >
      <Row className="App-header">
        <Col>
          <TopNav dropdownSelection={this.setDropdown} sendInput={this.setFormSelection} /* routerProps={routerProps} */ />
        </Col>
      </Row>
      <Row>
        <Col xs="2" id="sidebar">
        <Sidebar selectList={this.selectList} setId={this.fetchRandomId} />
        </Col>
        <Col >
          <Route path="/"
            component={Home}
            exact />
          <Route path ={`/objects/${this.state.browseSelection}`} 
            render={() => <FieldList listName={this.state.browseSelection} url={url} />}
            exact
          />
          <Route path="/objects/random"
            render={() => <Object url={url} id={this.state.objectId} />} 
            exact
          />
          <Route path={`/objects/id/${this.state.formInput}`}
            render={() => <Object url={url} id={this.state.formInput} />} 
            exact
          />
        </Col>
      </Row>
    </Container>
  );
  }
}

export default App;
