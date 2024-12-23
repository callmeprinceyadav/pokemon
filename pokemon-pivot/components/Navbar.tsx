import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white">
      <div className="mx-auto flex flex-wrap justify-between items-center px-4 md:px-8">
        <div className="w-1/3 md:w-auto flex justify-center md:justify-start">
          <img
            src="https://media4.giphy.com/media/FCffpN404oRZpFbSzl/giphy.gif?cid=6c09b952nk4uu9qckoxo9jixvstq21ss1uvbht3ryxntd2ol&ep=v1_stickers_search&rid=giphy.gif&ct=s"
            alt="Gif 1"
            width={150}
            height={150}
            className="object-cover rounded-full"
          />
        </div>
        <div className="w-1/3 md:w-auto flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvI9U-ImGqO7fh6lVypwxZCbx0xSa-qLV_LA&s"
            alt="Image"
            width={250}
            height={200}
            className="object-cover rounded-full"
          />
        </div>
        <div className="w-1/3 md:w-auto flex justify-center md:justify-end">
          <img
            src="https://media3.giphy.com/media/6xr4bW2csldWKmJkjO/giphy.gif?cid=6c09b952nk4uu9qckoxo9jixvstq21ss1uvbht3ryxntd2ol&ep=v1_stickers_search&rid=giphy.gif&ct=s"
            alt="Gif 2"
            width={150}
            height={150}
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
