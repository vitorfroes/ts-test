import { ChangeEvent, useState } from "react";

const Sum = () => {
  const [inputs, setInputs] = useState({ number1: 0, number2: 0, result: 0 });

  const makeSum = (n1: number, n2: number) => {
    return n1 + n2;
  };

  const handleClick = () => {
    const n1 = inputs.number1;
    const n2 = inputs.number2;
    setInputs({ ...inputs, result: makeSum(n1, n2) });
  };

  const setValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: Number(e.target.value) });
  };

  return (
    <>
      <header className="App-header">
        <h1>Sum!</h1>
      </header>
      <div>
        <input
          type="number"
          name="number1"
          value={inputs.number1}
          onChange={(e) => setValue(e)}
        />
        <span>+</span>
        <input
          type="number"
          name="number2"
          value={inputs.number2}
          onChange={(e) => setValue(e)}
        />
        <button type="button" onClick={handleClick}>
          Sum
        </button>
      </div>

      {inputs?.result && <div>{inputs.result}</div>}
    </>
  );
};

export default Sum;
