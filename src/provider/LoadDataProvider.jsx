/**
 * LoadDataProvider.jsx
 */
import { useState } from "react";
import PropTypes from "prop-types";

import { LoadDataContext } from "./LoadDataContext";

export const LoadDataProvider = (props) => {
  // props
  const { children } = props;
  // State
  const [ loading, setLoading ] = useState(false);
  const [ pokeData, setPokeData ] = useState([]);
  // function
  
  return (
      <LoadDataContext.Provider value={{ loading, setLoading, pokeData, setPokeData }}>
       { children }
      </LoadDataContext.Provider>
  );
};
LoadDataProvider.propTypes = {
  children: PropTypes.node
}