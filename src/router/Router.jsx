/**
 * Router.jsx
 */

import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Top } from '../components/pages/Top';

export const Router = memo(() => {
  // Context
  // props
  // const { prop } = props;
  // State
  
  // function
  
  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<Top/>}/>
        </Route>
      </Routes> 
    </>
  );
});
Router.displayName = 'Router';