import React, { useEffect, useMemo, useState } from "react";

const HookUseMemo = () => {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState(false);

  const fetchAllProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      if (result && result.products) setData(result.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  function filterProductsByPrice(products) {
    console.log("This is getting called.");
    return products && products.length > 0
      ? products.filter((item) => item.price > 100)
      : "";
  }

  const memorizeFilterProductsByValues = useMemo(
    () => filterProductsByPrice(data),
    [data]
  );

  return (
    <div>
      <h1>Use Memo Hook</h1>
      <div className="">
        <ul>
          {memorizeFilterProductsByValues &&
            memorizeFilterProductsByValues.map((item) => <li key={item.id}>{item.title}</li>)}
        </ul>
      </div>

      <div className="">
        <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
        <h2>{theme ? "Light" : "Dark"}</h2>
      </div>
    </div>
  );
};

export default HookUseMemo;
