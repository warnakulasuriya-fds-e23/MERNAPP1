import { useEffect, useState } from "react";
const Content3 = () => {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount(count + 1);
  }
  function resetCount() {
    setCount(0);
  }
  return (
    <>
      <p>this is just for testing component creations</p>
      <p>the count is : {count}</p>
      <button onClick={incrementCount}>Click Me!</button>
      <button onClick={resetCount}>Reset</button>
    </>
  );
};

function Content4({ count, incrementCount, resetCount }) {
  return (
    <>
      <p>count : {count} </p>
      <button onClick={incrementCount}>Click Me</button>
      <button onClick={resetCount}>reset</button>
    </>
  );
}
const Home = () => {
  useEffect(() => {
    //continue typing from here
  }, []);
  let content = true;
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];
  const listofProducts = products.map((product) => (
    <>
      <li
        key={product.id}
        style={{ color: product.isFruit ? "magenta" : "blue" }}
      >
        {product.title}
      </li>
    </>
  ));

  function Content2() {
    return (
      <>
        <p>testing things out</p>
      </>
    );
  }
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount(count + 1);
  }
  function resetCount() {
    setCount(0);
  }

  return (
    <div className="home">
      <h2>Home</h2>
      {content ? (
        <p
          style={{
            fontSize: "100px",
          }}
        >
          this is for true condition
        </p>
      ) : (
        <p>this is for false condition</p>
      )}
      {content && <p>also because true</p>}
      <ul>{listofProducts}</ul>
      <Content2 />
      <Content3 />
      <Content3 />

      <p>this is to test lifting state</p>
      <Content4
        count={count}
        incrementCount={incrementCount}
        resetCount={resetCount}
      />

      <Content4
        count={count}
        incrementCount={incrementCount}
        resetCount={resetCount}
      />
    </div>
  );
};

export default Home;
