import React, { useEffect, useState } from "react";

const UseFetchHook = (url, options) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        ...options,
      });
      const result = await response.json();
      if (result) {
        setLoading(false);
        setData(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, data };
};

export default UseFetchHook;
