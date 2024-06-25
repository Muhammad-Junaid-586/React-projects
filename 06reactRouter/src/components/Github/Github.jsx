import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Muhammad-Junaid-586")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className=" text-center p-4 bg-gray-700 text-white text-3xl">
      Github Follower :{data.followers}
      <img
        className=" text-center rounded-full mx-auto py-2"
        src={data.avatar_url}
        alt=""
        width={300}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/Muhammad-Junaid-586"
  );
  return response.json();
};
