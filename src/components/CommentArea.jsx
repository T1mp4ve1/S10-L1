import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
// import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGNkMGU2NTZmMzAyMjAwMTUxMDgwY2QiLCJpYXQiOjE3NTk0MDg0MzYsImV4cCI6MTc2MDYxODAzNn0.240kSrbfjNhaGPmd2qpzL_9IvsqKzY5tOLFi81LXYCs",
          },
        }
      );
      if (res.ok) {
        const datarecived = await res.json();
        this.setState({ comments: datarecived });
        console.log(datarecived);
      } else {
        throw new Error("Errore nei dati");
      }
    } catch (err) {
      console.log("Fetch:", err);
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <div id="commentArea" className="text-light p-2">
        <h3>Commenti:</h3>
        <CommentsList comments={this.state.comments} />
        <AddComment asin={this.props.asin} />
      </div>
    );
  }
}
export default CommentArea;
