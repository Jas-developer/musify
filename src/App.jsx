import { useEffect, useState } from "react";
import { Layout } from "./Layout";

export const App = () => {
  const [lyrics, setLyrics] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=2396871";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "c425aafb44mshdd077788820edfap1368e4jsnb1c6c2f3ee98",
          "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json(); // Parse the response as JSON
        if (
          data &&
          data.lyrics &&
          data.lyrics.lyrics &&
          data.lyrics.lyrics.body &&
          data.lyrics.lyrics.body.html
        ) {
          setLyrics(data.lyrics.lyrics.body.html);
        } else {
          setLyrics("Lyrics not available.");
        }
      } catch (error) {
        console.error(error);
        setLyrics("Error fetching lyrics.");
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        background:
          "linear-gradient(to top left, #4f283b, #dbdbdb, #3f5e69, #84141f, #c4c4c4, #ac8484)",
      }}
    >
      {lyrics ? (
        <div className="grid grid-cols-3">
          <div className="grid-item">
            <Layout />
          </div>
          <div className="grid-item col-span-2  font-semibold flex flex-col gap-6 p-12">
            <span className="text-4xl text-white">Explore</span>
            <div className="flex flex-row gap-12 text-xl text-white">
              <span className="font-bold">Lyrics</span>
              <span>Other Albums</span>
              <span>Related Artist</span>
            </div>
            <p
              className="text-md font-semibold text-white "
              dangerouslySetInnerHTML={{ __html: lyrics }}
            ></p>
          </div>
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};
