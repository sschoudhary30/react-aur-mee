import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className=" flex justify-center p-6 text-3xl font-bold">
      User &nbsp;<span className=" text-green-500"> {userid}</span>
    </div>
  );
}

export default User;
