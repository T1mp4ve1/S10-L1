import { Component } from "react";

class SingleComment extends Component {
  render() {
    const { comment } = this.props;
    return (
      <li>
        {comment.comment} - <strong>Voto: {comment.rate}</strong>
      </li>
    );
  }
}

export default SingleComment;
