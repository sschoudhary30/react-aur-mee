import { Footer, Header } from "./components/indec";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/** this outlet will dynamically load differen component */}
      <Footer />
    </>
  );
}

export default Layout;
