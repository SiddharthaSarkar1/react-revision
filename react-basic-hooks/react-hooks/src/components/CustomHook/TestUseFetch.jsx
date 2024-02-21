import React from "react";
import UseFetchHook from "./UseFetchHook";

const TestUseFetch = () => {
  const { data, loading } = UseFetchHook("https://dummyjson.com/products", {});

  console.log(data, loading);

  if(loading) <h2>Loading Data!! Please Wait.</h2>

  return (
    <div>
      <h1>Custom Hook UseFetch</h1>
      <ul>
        {data && data.products && data.products.length > 0 ? (
          data.products.map((item) => <li key={item.id}>{item.title}</li>)
        ) : (
          <h3>No Data</h3>
        )}
      </ul>
    </div>
  );
};

export default TestUseFetch;
