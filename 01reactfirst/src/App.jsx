import Bhai from "./Bhai";

function App() {
  const username = "sureh hotha";
  return (
    <>
      <h1>Suresh bhai | Suresh {username}</h1>
      <Bhai />
      {/** Bhai() this right but not good */}
    </>
  );
}

export default App;

// {username} == this is know as evaluated js expression.
// mean here we only use final outcome of js.
// we can't write pure js over her {if(true} then ....} XXXX
