/* 
** PokemonCard.jsx;
*/ 
import { memo } from 'react';
import PropTypes from 'prop-types';

import './PokemonCard.css'

export const PokemonCard = memo((props) => {
  // Context
  // props
  const { name, imgUrl, types, weight, height, abilities } = props;
  // State
  
  // function
  
  return (
    <>
      <div className="c-card">
        <div className="c-card_container">
          <div className="c-card_title">
            <h2>{name}</h2>
          </div>
          <div className="c-card_img">
            <img src={imgUrl} alt={name} />
          </div>
          <div className="c-card_content">
            <p>タイプ：{types}</p>
            <p>体重：{weight} kg</p>
            <p>身長：{height} cm</p>
            <p>アビリティ：{abilities}</p>
          </div>
        </div>
      </div>       
    </>
  );
});
PokemonCard.displayName = 'PokemonCard';
PokemonCard.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  types: PropTypes.string,
  weight: PropTypes.number,
  height: PropTypes.number,
  abilities: PropTypes.string,
};