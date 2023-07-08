import React from 'react';

// https://reactjs.org/docs/hooks-reference.html#usestate
const Counter = (props) => {
  const { initCount = 0 } = props;
  // 宣告const initCount = pros.initCount;

  // TODO React hooks - useState
  const [count, setCount] = React.useState(initCount);
  // useState一定回傳新陣列,陣列是[初始值,function]
  // react這行背後就是一個function,收到資料異動會傳一個新陣列

  // const arr = React.useState(initCount);
  // const count = arr[0]
  // const Setcount = arr [1]

  /* 上面一行等於三面這三行
  const stateArr = React.useState(0);
  const count = stateArr[0];
  const setCount = stateArr[1];
  */

  const atClick = () => {
    // TODO
    setCount(count + 1);
  };
  return (
    <div className="border p-2 border-2 border-dark">
      <h2 className="count">count:{count}</h2>
      <button className="button" onClick={atClick}>
        increment
      </button>
    </div>
  );
};

/** // FIXME，三分鐘的隨堂測試
 * 放兩個 Counter Component
 * 一個 count 為 0
 * 另一個 count 為 1
 */
const Example = () => {
  return (
    <section data-name="Example4">
      <Counter initCount={0} />
      <Counter initCount={1} />
    </section>
  );
};
export default Example;
