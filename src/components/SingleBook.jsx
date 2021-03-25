import React from "react";
import CommentArea from "./CommentArea";
import { Card, Button } from "react-bootstrap";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card>
        <Card.Img
          variant="top"
          src={this.props.book.img}
          height="300px"
          onClick={() => this.setState({ selected: !this.state.selected })}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title.slice(0, 15)} ...</Card.Title>
          <Card.Text>${this.props.book.price}</Card.Text>
          <Button variant="success">Add to Cart</Button>
          {this.state.selected && <CommentArea book={this.props.book} />}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
