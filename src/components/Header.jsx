import React, { useEffect, useState } from "react";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { GifState } from "../context/gif-context";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const { gf, filter, setFilter, favorites } = GifState();

  const fetchGifCategories = async () => {
    const res = await fetch("/categories.json");
    const { data } = await res.json();
    setCategories(data);
  };
  useEffect(() => {
    fetchGifCategories();
  }, []);
  return (
    <nav>
      <div className="relative flex items-center justify-between gap-4 mb-2">
        <Link to="/" className="flex gap-2">
          <img src="/logo.svg" className="w-8" alt="Gif logo" />
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
            GIF Extractor
          </h1>
        </Link>

        {categories?.slice(0, 5).map((category) => {
          return (
            <Link
              className="hidden px-4 py-1 transition ease-in-out border-b-4 hover:gradient lg:block"
              key={category.name}
              to={`/${category.name_encoded}`}
            >
              {category.name}
            </Link>
          );
        })}
        <Link className="hidden px-4 py-1 transition ease-in-out border-b-4 hover:gradient lg:block">
          Test Recation
        </Link>
        <button onClick={() => setShowCategories(!showCategories)}>
          <HiEllipsisVertical
            size={35}
            className={`py-0.5 transition ease-in-out hover:gradient ${
              showCategories ? "gradient" : ""
            } border-b-4 cursor-pointer hidden lg:block`}
          />
        </button>
        <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
          <Link to="/favorites">Favorite GIFs</Link>
        </div>
        <button onClick={() => setShowCategories(!showCategories)}>
          <HiMiniBars3BottomRight
            className="block text-sky-400 lg:hidden"
            size={30}
          />
        </button>

        {showCategories && (
          <div className="absolute right-0 z-20 w-full px-10 pt-6 top-14 pb-9 gradient">
            <span className="text-3xl font-extrabold">Categories</span>
            <hr className="my-5 bg-gray-100 opacity-50" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
