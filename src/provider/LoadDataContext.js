/**
 * LoadDataContext.js
 */

import { useContext } from "react";
import { createContext } from "react";

export const LoadDataContext = createContext();

// 作成したコンテキストを呼び出すための関数（カスタムフック化）
export const useLoadDataContext = () => useContext(LoadDataContext);