import { useQuery } from "@tanstack/react-query";
import React from "react";

function Posts() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["images"],
    queryFn: () =>
      fetch("https://picsum.photos/v2/list?page=2&limit=10").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <p>Loading Images...</p>;
  if (isError) return <p>Error loading images</p>;

  return (
    <div>
      <h1>Posts List</h1>

      {data?.map((img) => (
        <div key={img.id}>
          <img
            src={img.download_url}
            alt={img.author}
            width="200"
            height="150"
          />
          <p>{img.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
