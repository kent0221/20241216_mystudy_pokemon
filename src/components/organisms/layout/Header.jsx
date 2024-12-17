/* 
** Header.jsx;
*/ 

import { memo } from 'react';

import './Header.css'

export const Header = memo(() => {
  // Context
  // props
  // const { prop } = props;
  // State
  
  // function
  
  return (
    <>
      <header className="c-header">
        <div className="c-header_content">
          <h1>ポケモン図鑑</h1>
        </div>
      </header>
    </>
  );
});
Header.displayName = 'Header';