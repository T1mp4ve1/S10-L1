import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: "",
    rate: 1,
    elementId: this.props.asin,
  };

  addComment = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGNkMGU2NTZmMzAyMjAwMTUxMDgwY2QiLCJpYXQiOjE3NTk0MDg0MzYsImV4cCI6MTc2MDYxODAzNn0.240kSrbfjNhaGPmd2qpzL_9IvsqKzY5tOLFi81LXYCs",
          },
          body: JSON.stringify({
            comment: this.state.comment,
            rate: this.state.rate,
            elementId: this.props.asin,
          }),
        }
      );

      if (res.ok) {
        this.setState({ comment: "", rate: 1, elementId: this.props.asin });
      } else {
        throw new Error("Errore nel commento");
      }
    } catch (err) {
      console.log("Errore:", err);
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addComment}>
          <Form.Group className="mb-2">
            <Form.Label>Recensione</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci qui il testo"
              value={this.state.comment}
              onChange={(e) =>
                this.setState({
                  comment: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Valutazione</Form.Label>
            <Form.Control
              as="select"
              value={this.state.rate}
              onChange={(e) =>
                this.setState({
                  rate: e.target.value,
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Invia
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddComment;
