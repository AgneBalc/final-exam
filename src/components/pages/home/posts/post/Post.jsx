import { useContext, useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import StyledPost from "./StyledPost";
import UsersContext from "../../../../../contexts/users-context";
import DropdownMenu from "./dropdown-menu/DropdownMenu";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { users: { users, loggedInUser } } = useContext(UsersContext);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const postAuthor = users.find(user => user.id === post.userId);

  const handleDropdownMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  return (
    <StyledPost>
      <div className="votes">
        {/* <i className="fa-solid fa-caret-up"></i> */}
        <i className="fa-solid fa-up-long"></i>
        <span>{post.likes}</span>
        {/* <i className="fa-solid fa-caret-down"></i> */}
        <i className="fa-solid fa-down-long"></i>
      </div>
      {loggedInUser && loggedInUser.id === postAuthor.id ? (
        <>
          <div
            className="openMenu"
            onClick={handleDropdownMenu}>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
          {isUserMenuOpen && <DropdownMenu />}
        </>
      ) : null}
      <Link to={`/post/${post.id}`}>
        <div className="content">
          <p>Posted by {postAuthor.username} {formatDistanceToNow(new Date(post.dateCreated))} ago</p>
          <h2>{post.title}</h2>
          {post.image &&
            <img src={post.image} alt={post.title} />}
          {post.text &&
            <p className="text">{post.text}</p>}
        </div>
        <div className="comments">
          <i className="fa-regular fa-message"></i>
          {/* SUTVARKYTIT KOMENTARU SKAICIU!!!! */}
          <p>3 Comments</p>
        </div>
      </Link>
    </StyledPost>
  );
}

export default Post;