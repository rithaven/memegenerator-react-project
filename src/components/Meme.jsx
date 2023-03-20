import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}
  return (
    <main className="px-16 py-4">
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <input
          type="text"
          placeholder="Top text"
          className="p-2 border rounded-md"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="p-2 border rounded-md"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button
          className="col-span-2 py-2 text-white border-none rounded-md cursor-pointer bg-gradient-to-r from-myPurple via-purple-500 to-purple-500"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="relative">
        <img src={meme.randomImage} className="w-full rounded-sm" />
        <h2 className="absolute top-0 items-center m-4 text-3xl font-extrabold text-white transform md:text-7xl drop-shadow-lg shadow-black md:left-32 left-10">{meme.topText}</h2>
        <h2 className="absolute bottom-0 items-center m-4 text-3xl font-extrabold text-white transform md:text-7xl drop-shadow-md shadow-black md:left-32 left-10">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
