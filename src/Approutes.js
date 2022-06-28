import React from "react";
import {Routes, Route, } from "react-router-dom";
import IntegrationData from "./Pages/IntegrationData";
import Dashboard from "./Pages/Dashboard"
import Queue from "./Pages/Queue";
import Login from "./Pages/Login";
// import Transactions  from "./Pages/Transactions";
import Merchantscomponent from "./Pages/Merchantscomponent";
import Tablecomponent from "./Pages/Tablecomponent";
import Abc from "./Pages/Abc";


function AppRoutes() {
  return (
    <Routes>
        <Route path="/"  element={<IntegrationData/>} />
        <Route path="Pages/Dashboard" element={<Dashboard/>} />
        <Route path="Pages/Queue" element={<Queue/>} />
        <Route path="Pages/Login" element={<Login/>} />
        {/* <Route path="pages/Transactions" element={<Transactions/>}/> */}
        <Route path="Pages/Merchantscomponent" element={<Merchantscomponent/>}/>
         <Route path="Pages/Tablecomponent" element={<Tablecomponent/>}/>
         <Route path="Pages/Abc" element={<Abc/>}/>
    </Routes>
  );
}

export default AppRoutes;