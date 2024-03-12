"use client";
import React, { useState } from "react";

function FetchExample() {
  const [postData, setPostData] = useState<null | any>(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/user");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPostData(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(postData);

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>

      {postData &&
        postData.map((data: any) => (
          <div>
            <p>post id" {data.id}</p>
            <h2>Post name: {data.fulllName}</h2>
            <p>Post phone: {data.phone}</p>
          </div>
        ))}
    </div>
  );
}

export default FetchExample;
