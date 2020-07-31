import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'

import TopNav from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Object from './Components/Object'
import Home from './Components/Home'
import {Route, Link} from 'react-router-dom'
import List from './Components/List'

let url = "https://met-museum-api.herokuapp.com"

class App extends Component {
  constructor(){
    super()
    this.state = {
      navSelection: ""
      ,objectId: ""
    }
  }

  selectList = listName => {
    this.setState({
      navSelection: listName
    })
  }

  render() {
  return (
    <Container fluid >
      <Row className="App-header">
        <TopNav />
      </Row>
      <Row>
        <Col xs="2" id="sidebar">
        <Sidebar selectList={this.selectList} />
        </Col>
        <Col >
          <Route path="/"
            component={Home}
            exact />
          <Route path ={`/objects/${this.state.navSelection}`} 
            render={() => <List listName={this.state.navSelection} url={url} />}
          />
          {/* <Route path={`/objects/${this.state.objectId}`} 
            render={() => <Object id={this.state.objectId} />} 
            exact
          /> */}
        </Col>
      </Row>
    </Container>
  );
  }
}

export default App;
