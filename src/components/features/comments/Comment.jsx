import StyledComment from "./StyledComment";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const Comment = ({ comment }) => {
  return (
    <StyledComment>
      {comment.wasEdited && (
        <div className="was-edited">
          <i className="fa-solid fa-pencil"></i>
          <span>Edited</span>
        </div>
      )}
      <div className="votes">
        <i className="fa-solid fa-caret-up"></i>
        <span>{comment.likes}</span>
        <i className="fa-solid fa-caret-down"></i>
      </div>
      <div className="content">
        <div>
          {/* <img src={commentAuthor.picture} alt={commentAuthor.username} />
          <span>{commentAuthor.username}</span> */}
          <span>{formatDistanceToNow(new Date(comment.dateCreated))} ago</span>
        </div>
        <p className="text">{comment.text}</p>
      </div>
    </StyledComment>
  );
}

export default Comment;