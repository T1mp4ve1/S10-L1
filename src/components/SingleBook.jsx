import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    const { book, isSelected, onSelect } = this.props;
    return (
      <>
        <Card
          onClick={onSelect}
          style={{
            border: isSelected
              ? "3px solid rgb(178, 178, 178)"
              : "3px solid rgba(0, 0, 0, 0)",
          }}
        >
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
