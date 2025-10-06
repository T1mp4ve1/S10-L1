import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    const { comments } = this.props;
    return (
      <ul>
        {comments.map((c) => (
          <SingleComment key={c._id} comment={c} />
        ))}
      </ul>
    );
  }
}

export default CommentsList;
