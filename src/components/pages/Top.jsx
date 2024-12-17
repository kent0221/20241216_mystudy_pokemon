/* 
** Top.jsx;
*/ 
import { memo } from 'react';

import { HeaderLayout } from '../templates/HeaderLayout';
import { Main } from './Main';
import { Pagination } from '../molecules/Pagination';
import { useFetchData } from '../../hooks/useFetchData';
import { useEffect } from 'react';
import { useState } from 'react';


export const Top = memo(() => {
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";
  // props
  // Context
  // hooks
  const { getAllPokemon, loadPokemon } = useFetchData();
  // State
  const [prevURL, setPrevURL] = useState('');
  const [nextURL, setNextURL] = useState('');
  // func
  // APIからデータ取得 → 詳細データ取得、次ページ・前ページURL取得
  const fetchData = async (url)=>{
    const data = await getAllPokemon(url);
    if(data && data.results){
      await loadPokemon(data.results);
      await setPrevURL(data?.previous);
      await setNextURL(data?.next);
    }else{
      return;
    }
  }
  // 最初のレンダリングのみ実行
  useEffect(()=>{
    fetchData(initialUrl);
  }, []);

  // Pagination
  const onClickPrev = async () => await fetchData(prevURL);
  const onClickNext = async () => await fetchData(nextURL);
  

  return (
    <>
      <HeaderLayout>
        <Main/>
        <Pagination
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
        />
      </HeaderLayout> 
    </>
  );
});
Top.displayName = 'Top';