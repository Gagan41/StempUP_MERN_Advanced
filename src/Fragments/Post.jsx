import { useQuery } from "@tanstack/react-query";
import React from "react";

function Posts() {
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["images"],
  //   queryFn: () =>
  //     fetch("https://picsum.photos/v2/list?page=2&limit=10").then((res) =>
  //       res.json()
  //     ),
  // });

  //using asyncs and await
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      console.log("fetching images from API....");
      const res = await fetch("https://picsum.photos/v2/list?page=14&limit=10");

      if (!res.ok) throw new Error("Newtwrok response was not ok");
      return res.json();
    },
    staleTime: 1000,
  });

  if (isLoading) return <p>Loading Images...</p>;
  if (isError) return <p>Error loading images</p>;

  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Posts Gallery
      </h1>
      {isFetching && <p>🔄 Refreshing images in background....</p>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {data?.map((img) => (
          <div
            key={img.id}
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              backgroundColor: "#fff",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <img
              src={img.download_url}
              alt={img.author}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                display: "block",
              }}
            />
            <p
              style={{
                margin: 0,
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#f8f8f8",
                fontWeight: "500",
              }}
            >
              {img.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
