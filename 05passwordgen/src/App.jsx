import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

import { useRef } from "react";

function App() {
  const [length, setLength] = useState(8);

  const [numAllowed, setNumAllowed] = useState(false);

  const [specialchar, setspecialchar] = useState(false);
  const [password, setpassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (specialchar) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numAllowed, specialchar, setpassword]);

  const copypassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length - 4);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, specialchar, passwordGenerator]);

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-3xl px-4 py-4 my-65 bg-black
       text-emerald-300"
      >
        <h1 className="text-white text-center my-3 font-bold ">
          Password <span className=" text-teal-400">Gen</span>erator
        </h1>
        <div className="flex shadow rounded-lg font-semibold overflow-hidden mb-4 bg-white">
          <input
            type="text"
            value={password}
            placeholder="password"
            className=" outline-none w-full py-1 px-3"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none  bg-teal-400 text-white px-3 font-bold py-1 shrink-0 cursor-pointer justify-center items-center"
            onClick={copypassword}
          >
            copy📄
          </button>
        </div>

        <input
          type="range"
          min={8}
          max={100}
          value={length}
          className=" cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
        />
        <label>lenght: {length}</label>

        <input
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={() => setNumAllowed((prev) => !prev)}
        />
        <label>numAllowed</label>
        <input
          type="checkbox"
          defaultChecked={specialchar}
          id="specialInput"
          onChange={() => setspecialchar((prev) => !prev)}
        />
        <label>specialchar</label>
      </div>
    </>
  );
}

export default App;

// find kar diff of useEffect and useCallback
