import "./App.css";
import Cad from "./components/Cad.jsx";
import Card from "./components/Card.jsx";
import infoList from "./contant.js";
function App() {
  let info = {
    name: "suresh",
    age: 24,
    email: "chai@google.com",
  };

  return (
    <>
      <h1 className=" text-amber-200 text-4xl mb-4">
        bhai tera coder hai 🟢🟢
      </h1>
      <div className=" flex justify-between">
        <Card
          name="suresh"
          infoN={info} /** this is way to pass object od data */
          btnText="Click Me"
        />

        <Card name="netu" btnText="fuck Me!!" />

        <Cad infoN={info} />

        <div className="">
          {infoList.map((data) => (
            <Cad key={data.name} infoN={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
