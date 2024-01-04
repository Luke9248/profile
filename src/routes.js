import React from 'react';
import {Route, Routes} from 'react-router-dom';

// components
import Landing from './pages/Landing';
import Projects from "./pages/Projects";

const routes = (
  <Routes>
    {/*basic*/}
    <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Landing/>}/>
    <Route exact path={`${process.env.PUBLIC_URL}/projects`} element={<Projects/>}/>

  </Routes>
);

export default routes;
