const Comment = ({ data }) => {
  return (
    <div>
      {data.map((element) => {
        <p>{element.id}</p>;
      })}
    </div>
  );
};

export default Comment;
