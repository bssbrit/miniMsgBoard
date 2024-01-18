const Comment = ({ data, commentType }) => {
  return (
    <div>
      <button onClick={() => console.log(data)}>comment data</button>

      {data.map((element) => (
        <div key={element.id}>
          <div className={commentType}>
            <div>
              <button>like</button>
              <p>{element.score}</p>
              <button>Dislike</button>
            </div>
            <div>
              <div>
                <img src={element.user.image.png} alt="profile pic" />
                <p>{element.user.username}</p>
                <button>
                  <img src="./images/icon-reply.svg" alt="" />
                  Reply
                </button>
              </div>
              <p>{element.content}</p>
            </div>
          </div>

          {element.replies && element.replies.length > 0 ? (
            <Comment data={element.replies} commentType={"reply"} />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Comment;
