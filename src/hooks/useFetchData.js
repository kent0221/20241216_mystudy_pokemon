/* 
** useFetchData.js
*/
import { useCallback } from 'react';
import { useLoadDataContext } from '../provider/LoadDataContext';

export const useFetchData = () => {
  // Context
  const { setLoading, setPokeData } = useLoadDataContext();
  // State
  /**
   * function
   * 1. getData: 引数URLをもらってデータをfetch→成功ならJSON形式に変換したデータを返す
   */
  const getAllPokemon = useCallback( async (url) =>{
    // ローディング開始
    setLoading(true);
    // データをfetch→成功or失敗処理→ロード終了
    try{
      // APIからデータ取得
      const res = await fetch(url);
      // 取得したデータをJSON形式へ変換
      const jsonData = res.json();
      // JSONデータを返す
      return await jsonData
    }catch(error){
      console.error('データの取得に失敗', error);
    }finally{
      setLoading(false);
    }
  },[setLoading])

  const loadPokemon = useCallback( async (results) => {
    try{
      // success処理
      const PokeDataDetails = await Promise.all(
        results.map( async (result) => {
          const res = await fetch(result.url);
          const jsonData = res.json();
          return await jsonData
        })
      )
      setPokeData(PokeDataDetails);
    }catch(error){
      // error処理
      console.error('詳細情報の取得に失敗', error);
    }
  },[setPokeData])

  return { setLoading, getAllPokemon, loadPokemon }
};