/* 
** Main.jsx;
*/ 
import { memo } from 'react';

import './Main.css'
import { PokemonCard } from '../organisms/card/PokemonCard';
import { useLoadDataContext } from '../../provider/LoadDataContext';

export const Main = memo(() => {
  // Context
  const { pokeData } = useLoadDataContext();
  // hooks
  // props
  // const { prop } = props;
  // State
  return (
    <>
      <section className="c-main">
        <ul className="c-main_listContainer">
          {pokeData.map((data, id)=>(
          <li key={id} className="c-main_listItem">
            <PokemonCard
            name={data.name}
            imgUrl={data.sprites.front_default}
            types={data.types.map(item => item.type.name).join(' / ')}
            weight={data.weight}
            height={data.height*10}
            abilities={data.abilities.map(item => item.ability.name).join(' / ')}
            />
          </li>
          ))}
        </ul>
      </section> 
    </>
  );
});
Main.displayName = 'Main';