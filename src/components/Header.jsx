import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, hideCategories] = useState(false);

  return (
    <nav>
      <div>
        <Link to="/" className="flex gap-2">
          <img src="/logo.svg" className="w-8" alt="Gif logo" />
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
            GIF Extractor
          </h1>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
