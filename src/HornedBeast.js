import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class HornedBeast extends React.Component {
constructor(props){
super(props);
this.state = {
favorites: 0

}
}

handleFavorites = () => {
this.setState({
favorites: this.state.favorites + 1  
})

}






render(){
  return (
<>


<Row>
  <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.image_url} alt={this.props.name} onClick={this.handleFavorites} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          {this.props.description}
          <p><span role='img' aria-label='heart'>❤️</span>{this.state.favorites} Favorites</p>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
 
</Row>

</>

  )
}
}

export default HornedBeast;