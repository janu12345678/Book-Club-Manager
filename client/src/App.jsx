import React from 'react';
import {Route,Routes} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/home/Home";
import CreateBookClub from './components/cards/CreateBookClub';
import ManageBookClub from './components/cards/ManageBookClub';

function App() {
  return (
      <Routes>
          <Route index path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/create" element={<CreateBookClub/>}></Route>
          <Route path="/manage" element={<ManageBookClub/>}></Route>
      </Routes>
  );
}

export default App;