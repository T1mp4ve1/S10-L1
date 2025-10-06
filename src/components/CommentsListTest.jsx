import { Component } from "react";

class CommentsListTest extends Component {
  fetchComments = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGNkMGU2NTZmMzAyMjAwMTUxMDgwY2QiLCJpYXQiOjE3NTk0MDg0MzYsImV4cCI6MTc2MDYxODAzNn0.240kSrbfjNhaGPmd2qpzL_9IvsqKzY5tOLFi81LXYCs",
          },
        }
      );
      if (res.ok) {
        const commArray = await res.json();
        console.log(commArray);
      } else {
        throw new Error("Non siamo riusciti a reperire i dati");
      }
    } catch (err) {
      console.log("catch", err);
    }
  };
  componentDidMount() {
    this.fetchComments();
  }
  render() {
    return <h1>Vediamo il console</h1>;
  }
}
export default CommentsListTest;
