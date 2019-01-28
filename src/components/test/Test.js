import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  //   componentWillMount() {
  //     console.log("before mounted");
  //   }

  //   componentDidUpdate() {
  //     console.log("updated");
  //   }

  //   componentWillUpdate() {
  //     console.log("before update");
  //   }

  //   componentWillReceiveProps(nextProps, nextStates) {
  //     console.log("received new props");
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return {
  //       test: "something"
  //     };
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log("snapshot before update");
  //   }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
export default Test;
