import "./App.css";
import Card from "./components/Card.jsx";

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
      </div>
    </>
  );
}

export default App;
