import { useContext } from "react";
import UserContext from "../context/userContext";
function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please login!!</div>;

  return <div className=" mx-100 ">Welcome {user.username}</div>;
}

export default Profile;
