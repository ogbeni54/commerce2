import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [profile, setProfile] = useState([]);
  const [favri, setFavri] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.terawork.com/service-categories/sellers-services/computer-software-development')
      .then(res => {
        setProfile(res.data.data.service_search_results.hits);
      });
  }, []);

  const handleClick = (index) => {
    const newFav = [...favri];
    newFav[index] = !newFav[index];
    setFavri(newFav);
  };

  const state = {
    profile,
    favri
  };

  return (
    <MyContext.Provider value={{ state, handleClick }}>
      {children}
    </MyContext.Provider>
  );
};
