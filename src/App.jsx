import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import {
    Card, CardImg, ListGroup, ListGroupItem,
    CardTitle, Row, Container, Col
  } from 'reactstrap';



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json.results
                })
            });
    }
    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        return (
            <div>
               <Container>
                   <Row>
                      
                   {items.map(item => (
                       <Col md={3}>
                   <Card className="card-top">
        <CardImg top width="100%" src={item.image} />
        <CardTitle className="title-bar">
            <p>Name - {item.name}</p>
            <p>ID - {item.id}</p>
        </CardTitle>
        <ListGroup className="ListGroupItem">
      <ListGroupItem>
          <Row>
              <Col>Status</Col>
              <Col className="text-align">{item.status}</Col>
          </Row>
      </ListGroupItem>
      <ListGroupItem>
         <Row>
              <Col>Species</Col>
              <Col className="text-align">{item.species}</Col>
          </Row>
      </ListGroupItem>
      <ListGroupItem>
      <Row>
              <Col>Gender</Col>
              <Col className="text-align">{item.gender}</Col>
          </Row>
      </ListGroupItem>
      <ListGroupItem>
      <Row>
              <Col>Origin</Col>
              <Col className="text-align"><a href={item.origin.url}>{item.origin.name}</a></Col>
          </Row>
      </ListGroupItem>
      <ListGroupItem>
      <Row>
              <Col>Last Location</Col>
              <Col className="text-align"><a href={item.location.url}>{item.location.name}</a></Col>
          </Row>
      </ListGroupItem>
    </ListGroup>
      </Card>
      </Col>
                   
              

                
                 
 ))}
 </Row>
             </Container>
 </div>


                   
                
           
        );
    }
}