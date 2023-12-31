import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import LoginPage from './pages/User/loginPage';
import SignUp from './pages/User/SignUp';
import UserPage from './pages/UserPage/UserPage';
import ProductList from './pages/ProductList/ProductList';
import Product from './components/Product/Product';
import About from './pages/About/About.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/userpage" element={<UserPage />} />
        {/* <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      
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
