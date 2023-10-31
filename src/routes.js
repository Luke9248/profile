import React from 'react';
import {Route, Routes} from 'react-router-dom';

// components
import Landing from './pages/Landing';

const routes = (
  <Routes>
    {/*basic*/}
    <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Landing/>}/>

  </Routes>
);

export default routes;
