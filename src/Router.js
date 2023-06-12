import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import LoginPage from './pages/User/loginPage';
import SignUp from './pages/User/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/postlist" element={<PostListPage />} />
        <Route path="/result/:searchValue" element={<ResultPage />} />
        <Route path="/postpage/:id" element={<PostPage />} />
        <Route path="/editor" element={<Editor />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
