import React, { useEffect, useState } from "react";

function Fetch() {
  const [images, setImages] = useState([]); //store images
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      console.log("Fetching imagess from API");

      try {
        const res = await fetch(
          "https://picsum.photos/v2/list?page=2&limit=20"
        );
        console.log("API response", res.status);

        if (!res.ok)
          throw new Error(`Network repsonse was not ok : ${res.status}`);

        const data = await res.json();
        console.log(" 🏆fetched Data: ", data);
        setImages(data);
      } catch (err) {
        console.log(" 🚩error fetching images: ", err);
        setError(err);
      } finally {
        console.log(" 🟢 Fetch opeartion is completed");
        setLoading(false);
      }
    };
    loadImages();
  }, []);

  if (loading) return <p>Loading photos</p>;
  if (error) return <p>Failed to load photos</p>;

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts/")
  //     .then((response) => response.json())
  //     .then((data) => console.log("Fetched data:", data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  return (
    <div>
      {/* <h2>See the console for output</h2> */}
      <h1>Phtoto Gallery</h1>
      <div>
        {images.map((imag) => (
          <div key={imag.id}>
            <img src={imag.download_url} alt={imag.author} />
            <p>{imag.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fetch;
