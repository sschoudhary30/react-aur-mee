// function Profile() {
//   return <div className=" mx-100 ">Welcome </div>;
// }

// export default Profile;

import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please login in</div>;

  return (
    <div>
      <h1>
        welocome {user.username} {user.surname}
      </h1>
    </div>
  );
}

export default Profile;
