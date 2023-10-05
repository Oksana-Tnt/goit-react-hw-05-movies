import React, { useContext, useState } from 'react'

const ContextMovies = React.createContext();

export const useCustomContext = () => {
    return useContext(ContextMovies);
}


const Context = ({children}) => {
    const [movies, setMovies] = useState([]);
  return (
    <ContextMovies.Provider value={{movies, setMovies}}>
      {children}
    </ContextMovies.Provider>
  )
}

export default Context