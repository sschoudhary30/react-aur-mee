import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/userContextProvider";

function App() {
  return (
    <div className="justify-center p-6 gap-2">
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  );
}

export default App;
