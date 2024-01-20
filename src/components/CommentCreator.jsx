import { useState } from "react";
const CommentCreator = () => {
  const [comment, setComment] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`The comment you entered was: ${comment}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default CommentCreator;
