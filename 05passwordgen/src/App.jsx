import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numis, setnumis] = useState(false);
  const [charis, setcharis] = useState(false);
  const [password, setpassword] = useState("");
  const [isclicked, setIsclicked] = useState(false);
  // useRef hook
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numis) str += "0123456789";
    if (charis) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numis, charis, setpassword]); // yeh pe otimize k liye dependency hai // useCallback is for optimized

  const btnClickhandle = () => {
    setIsclicked(true);
    setTimeout(() => {
      setIsclicked(false);
    }, 500);
  };

  const copypasskey = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999); // ye length pick kar tha hai
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charis, numis, passwordGenerator]); // yeha pe dependency me change tho reload karo

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
            className=" outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef} // vo useref ka context ye wala hai.
          />
          <button
            className={`outline-none  bg-teal-400 text-white px-3 font-bold py-1 shrink-0 cursor-pointer justify-center items-center${
              isclicked ? " scale-125" : "scale-100"
            }`}
            onClick={() => {
              copypasskey();
              btnClickhandle();
            }}
          >
            copy📄
          </button>
        </div>
        <div className="flex text-sm gap-x-2 font-bold">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name=""
              id=""
              min={6}
              max={25}
              value={length}
              className=" cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numis}
              id="numberInput"
              onChange={() => {
                setnumis((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charis}
              id="characterInput"
              onChange={() => {
                setcharis((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// find kar diff of useEffect and useCallback
