import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setdata] = useState([]);
  //   useEffect(() => {
  //     fetch("https:/api.github.com/users/sschoudhary30")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setdata(data);
  //       });
  //   }, []);
  const data = useLoaderData();
  return (
    <>
      <div className=" text-center m-4 bg-gray-900/98 text-white p-5 text-3xl rounded-3xl flex justify-evenly">
        <div>
          <div>
            <img className=" w-35 rounded-xl" src={data.avatar_url} />
          </div>
        </div>
        <div className=" w-30 flex m-10 ">{data.name}</div>
        <div className="flex m-10">{data.location}</div>
      </div>
    </>
  );
}

export default Github;

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
  const response = await fetch("https:/api.github.com/users/sschoudhary30");
  return response.json();
};
