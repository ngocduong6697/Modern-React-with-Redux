import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./components/CommentDetail";
import faker from 'faker';
import ApprovalCard from "./components/ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="Ngoc"
        timeAgo="Today At 10:00PM"
        content="This block is nice"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Duong"
        timeAgo="Today At 9:00PM"
        content="I love this block"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Van"
        timeAgo="Today At 11:00PM"
        content="I'm not sure about that!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Toan"
        timeAgo="Today At 5:00PM"
        content="Do you think is good?"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
