import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/features/header/Header';
import Signup from './components/pages/signup/Signup';
import Login from './components/pages/login/Login';
import Home from './components/pages/home/Home';
import CreatePost from './components/pages/create-post/CreatePost';
import { useContext } from 'react';
import UsersContext from './contexts/users-context';
import PostPage from './components/pages/post/PostPage';
import UserPage from './components/pages/user-page/UserPage';

function App() {
  const { users: { loggedInUser } } = useContext(UsersContext);
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/add' element={loggedInUser ? <CreatePost /> : <Navigate to='/login' />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='/user/:username' element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
