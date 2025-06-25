import React from "react";

import { useLoaderData } from "react-router-dom";

export const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/sschoudhary30")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);

  return (
    <>
      <div>Github follwer: {data.followers}</div>
      <div>
        <img src={data.avatar_url} alt="Git picture" width={300} />
      </div>
    </>
  );
};

export const gitinfo = async () => {
  const response = await fetch("https://api.github.com/users/sschoudhary30");
  return response.json();
};
