import { useContext } from "react";
import CommentsContext, { COMMENTS_ACTIONS } from "../../../../contexts/comments-context";

const CommentMenu = ({ comment, toggleOpenMenu, handleEditOpen }) => {
  const { dispatchComments } = useContext(CommentsContext);
  // const {
  //   toggleModal,
  //   handleModalClose,
  //   isEditModalOpen,
  //   dispatchPosts
  // } = useContext(PostsContext);

  const handleEditComment = () => {
    handleEditOpen();
    toggleOpenMenu();
  }

  const handleDeleteComment = () => dispatchComments({
    type: COMMENTS_ACTIONS.DELETE,
    id: comment.id
  });

  return (
    <div>
      <div
        className="edit"
        onClick={handleEditComment}
      >
        <i className="fa-solid fa-pencil"></i>
        <span>Edit comment</span>
      </div>
      <div
        className="delete"
        onClick={handleDeleteComment}
      >
        <i className="fa-regular fa-trash-can"></i>
        <span>Delete comment</span>
      </div>
    </div>
  );
}

export default CommentMenu;