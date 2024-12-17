/* 
** Pagination.jsx;
*/ 

import { memo } from 'react';
import PropTypes from 'prop-types';

import './Pagination.css'

export const Pagination = memo((props) => {
  // Context
  // props
  const {onClickPrev, onClickNext} = props;
  // State
  // function
  return (
    <>
      <div className="c-pagination">
        <ul className="c-pagination_listContainer">
          <li className="c-pagination_listItem">
            <button className="c-pagination_buttonPrev" onClick={onClickPrev}>前へ</button>
          </li>
          <li className="c-pagination_listItem">
            <button className="c-pagination_buttonNext" onClick={onClickNext}>次へ</button>
          </li>
        </ul>
      </div> 
    </>
  );
});
Pagination.displayName = 'Pagination';
Pagination.propTypes = {
  onClickPrev: PropTypes.func,
  onClickNext: PropTypes.func,
};