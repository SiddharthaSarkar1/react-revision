import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  const [count, setCount] = useState(0);
  const [showtext, setShowtext] = useState(false);
  const [negative, setNegative] = useState(false);

  const [productList, setProductList] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();

      if (result && result.products) setProductList(result.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Run only once at the time of page load");
  }, []);

  useEffect(() => {
    if (count % 5 == 0 && count > 0) {
      setShowtext(true);
    } else {
      setShowtext(false);
    }
  }, [count]);

  useEffect(() => {
    if (count < 0) {
      setNegative(true);
    } else {
      setNegative(false);
    }
  }, [count]);

  useEffect(() => {

    if(count === 10){
        fetchAllProducts();
    }
    
  }, [count])
  

//   console.log(productList);

  return (
    <div>
      <h1>UseEffect Hook</h1>
      <h2>Count is {count}</h2>
      {showtext && <h3>Hey count crossing {count}.</h3>}
      {negative && <h3 style={{ color: "crimson" }}>Negative Number!!!!</h3>}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setCount(count - 1)}>decrease Count</button>

      <ul style={{listStyle: "none"}}>
        {productList && productList.length > 0
          ? productList.map((item) => {
              return <li key={item.id}>{item.title}</li>;
            })
          : null}
      </ul>
    </div>
  );
};

export default HookUseEffect;
