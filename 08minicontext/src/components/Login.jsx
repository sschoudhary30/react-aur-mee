import { useState } from "react";

import { useContext } from "react";

import UserContext from "../context/UserContext";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const [surname, setSurname] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password, surname });
    setusername("");
    setpassword("");
    setSurname("");
  };
  return (
    <>
      <div className="flex justify-between m-20 p-20 gap-2">
        <h2 className=" font-bold">Login</h2>
        <input
          className=" border-2 rounded-lg  p-1.5 m-1"
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          className=" border-2 rounded-lg  p-1.5 m-1"
          type="text"
          placeholder="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          className=" border-2 rounded-lg  p-1.5 m-1"
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button
          className=" border-2 rounded-lg  p-1.5 m-1"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Login;
