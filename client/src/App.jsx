
import './App.css';

import { Navbar } from "./components/Navbar";
import { Home } from './pages/Home';
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { UserDetails } from "./pages/UserDetails";
import { Categories } from "./Tasks/Categories";
import { BrandCreate } from "./Tasks/BrandCreate";
import { LogOut } from "./Tasks/LogOut";
import { ProductCreated } from "./Tasks/ProductCreated";
import { ProfileUpdate } from "./Tasks/ProfileUpdate";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function App() {

  const store = useSelector((store) => store);
  // console.log('storeInNavbar:', store.loginUser.loginUser)
  const loginUserData = store.loginUser.loginUser;
  // console.log('loginUserData:', loginUserData)
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Navbar />
          <Home />
        </>
      }></Route>
      <Route path="/users/create" element={
        <>
          <Navbar />
          <SignUp />
        </>
      }></Route>

      <Route path="/users/login" element={
        <>
          <Navbar />
          <Login />
        </>
      }></Route>
      {store.loginUser.loginUser.length === 0 ? 
        ""
        :
        <>
          <Route path={`/users/${loginUserData[0].firstName+"_"+loginUserData[0].lastName}`} element={
            <>
              <Navbar />
              <UserDetails />
            </>
          }></Route>
        </> 
      }
      <Route path="/users/logout/:id" element={
        <>
          <LogOut />
        </>
      }></Route>
      <Route path={`/users/:id/edit`} element={
        <>
          <Navbar />
          <ProfileUpdate />
        </>
      }></Route>
      <Route path={`/categories/create`} element={
        <>
          <Navbar />
          <Categories />
        </>
      }></Route>

      <Route path={`/product/create`} element={
        <>
          <Navbar />
          <ProductCreated />
        </>
      }></Route>
      <Route path={`/brand/create`} element={
        <>
          <Navbar />

          <BrandCreate />
        </>
      }></Route>
    </Routes>
  );
}

export default App;
