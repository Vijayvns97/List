    import React, {Component} from 'react'
    import {
        Card, CardImg, ListGroup, ListGroupItem,
        CardTitle, Row, Container, Col
      } from 'reactstrap';

    export class List extends Component {
        constructor(props) {
            super(props);
            this.state = {
                items: [],
                isLoaded: false
            }
        }
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        render(){
            return(
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
            )
        }
    }