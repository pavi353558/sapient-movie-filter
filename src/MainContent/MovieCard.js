import React from "react";
import { Card, ListGroup, ListGroupItem, Col } from "react-bootstrap";

const MovieCard = props => {
  const { movie } = props;
  const styleList = {
    backgroundColor: '#464545', 
    color:'white',
    padding:'0.5rem'
  }
  const cardTitle = {
    fontSize: '1rem',
    fontWeight: 600
  }
  return (
    // - created: {movie.created.substring(0, 10)}
    <Col md={3} xs={6}>
       <Card style={{margin: '10px', backgroundColor: 'rgb(132, 132, 132)', color:'white'}}>
      <Card.Img variant="top" src={movie.image} style={{height:'138px'}} />
      <Card.Body style={{padding:'0.5rem'}}>
        <Card.Title style={cardTitle}>{movie.name}</Card.Title>
        <Card.Text>
          id: {movie.id} 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem style={styleList}><span style={{textAlign:""}}>Status</span><span style={{float: 'right'}}>{movie.status}</span></ListGroupItem>
        <ListGroupItem style={styleList}><span>Species</span><span style={{float: 'right'}}>{movie.species}</span></ListGroupItem>
        <ListGroupItem style={styleList}><span>Gender</span><span style={{float: 'right'}}>{movie.gender}</span></ListGroupItem>
        <ListGroupItem style={styleList}><span>Origin</span><span style={{float: 'right'}}>{movie.origin.name.split(" ")[0]}</span></ListGroupItem>
        <ListGroupItem style={styleList}><span>Location</span><span style={{float: 'right'}}>{movie.location.name.split(" ")[0]}</span></ListGroupItem>

     
      </ListGroup>
      {/* <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body> */}
    </Card>
    </Col>
   
  );
};

export default MovieCard;
