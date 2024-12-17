/* 
** HeaderLayout.jsx;
*/ 
import { memo } from 'react';
import PropTypes from 'prop-types';

import { Header } from '../organisms/layout/Header';

export const HeaderLayout = memo((props) => {
  // Context
  // props
  const { children } = props;
  // State
  
  // function
  
  return (
    <>
      <Header/>
      {children} 
    </>
  );
});
HeaderLayout.displayName = 'HeaderLayout';
HeaderLayout.propTypes = {
  children: PropTypes.node
};