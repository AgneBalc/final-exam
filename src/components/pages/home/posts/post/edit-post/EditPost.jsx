import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { v4 as generatedId } from 'uuid';
import StyledEditPost from "./StyledEditPost";
import Button from "../../../../../UI/button/Button";
import PostsContext, { POSTS_ACTIONS } from "../../../../../../contexts/posts-context";
import UsersContext from "../../../../../../contexts/users-context";

const formTabs = [
  {
    title: "Post",
    icon: "fa-solid fa-file-lines"
  },
  {
    title: "Image",
    icon: "fa-regular fa-image"
  }
];

const EditPost = ({ post }) => {
  const { dispatchPosts } = useContext(PostsContext);
  const { users: { loggedInUser } } = useContext(UsersContext);
  const navigate = useNavigate();

  const initialValues = {
    title: post.title,
    text: post.text,
    image: post.image
  };

  const filledTabIndex = initialValues.text ? 0 : 1;

  const [selectedTab, setSelectedTab] = useState(formTabs[filledTabIndex].title);

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const editedPost = {
        id: post.id,
        title: values.title,
        text: values.text,
        image: values.image,
      };
      console.log(editedPost);
      dispatchPosts({
        type: POSTS_ACTIONS.EDIT,
        post: editedPost,
      });
      navigate('/');
    }
  });

  return (
    <StyledEditPost>
      <h2>Edit post</h2>
      <section>
        <div className="tabs">
          {formTabs.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(item.title)}
              className={item.title === selectedTab ? 'selected' : ''}
            >
              <i className={item.icon}></i>
              <span>{item.title}</span>
            </button>
          ))}
        </div>
        <form onSubmit={formik.handleSubmit}>
          <input
            id="title"
            type="text"
            placeholder="Title"
            required
            {...formik.getFieldProps('title')}
          />
          {selectedTab === 'Post' &&
            <textarea
              id="text"
              placeholder="Text"
              required
              {...formik.getFieldProps('text')}
            />}
          {selectedTab === "Image" &&
            <input
              id="image"
              type="url"
              placeholder="Url"
              required
              {...formik.getFieldProps('image')}
            />
          }
          <div className="buttons">
            <Link to='/'>
              <Button>Cancel</Button>
            </Link>
            <Button type='submit'>Save</Button>
          </div>
        </form>
      </section>
    </StyledEditPost>
  );
}

export default EditPost;