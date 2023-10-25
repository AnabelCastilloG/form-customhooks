import React from 'react';
import { getByName } from '../utils/getByName.js';
export const useFetch = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  const fetchByName = (name) => {
      setLoading(true);
      getByName(name).then((response) => {
        setData(response);     
      }).finally(()=>setLoading(false))
    
  };

  return { loading, data, fetchByName };
};
