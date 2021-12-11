import * as React from "react";
import {BrowserRouter,Route,Routes } from "react-router-dom";
import "./App.css";
import Home from './components/Resources'
import Details from './components/Deatails'
function App() {
  return (
    <div>
            <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="details/:id" element={<Details/>}/>
                </Routes>
            </BrowserRouter>
    </div>
  );
}
export default App;