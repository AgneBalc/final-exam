import { useContext, useState } from "react";
import StyledCreatePost from "./StyledCreatePost";
import Button from "../../UI/button/Button";
import PostsContext, { POSTS_ACTIONS } from "../../../contexts/posts-context";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { v4 as generatedId } from 'uuid';
import UsersContext from "../../../contexts/users-context";

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

const CreatePost = () => {
  const [selectedTab, setSelectedTab] = useState(formTabs[0].title);
  const { dispatchPosts } = useContext(PostsContext);
  const { users: { loggedInUser } } = useContext(UsersContext);
  const navigate = useNavigate();

  const initialValues = {
    title: '',
    text: '',
    image: ''
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const newPost = {
        id: generatedId(),
        userId: loggedInUser.id,
        title: values.title,
        text: values.text,
        image: values.image,
        likes: 0,
        wasEdited: false,
        dateCreated: new Date(),
      };
      console.log(newPost);

      dispatchPosts({
        type: POSTS_ACTIONS.ADD,
        post: newPost,
      });
      navigate('/');
    }
  });

  return (
    <StyledCreatePost>
      <h2>Create a post</h2>
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
            <Button type='submit'>Post</Button>
          </div>
        </form>
      </section>
    </StyledCreatePost>
  );
}

export default CreatePost;