import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import UserContextProvider from "./context/UserContextProvider";

function Layout() {
  return (
    <UserContextProvider>
      <Header />
      <Outlet />
    </UserContextProvider>
  );
}

export default Layout;
