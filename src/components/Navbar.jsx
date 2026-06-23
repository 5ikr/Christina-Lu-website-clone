import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <div className="left">
          <li>
            <a href="#">home</a>
          </li>
        </div>
        <div className="right">
          <li>
            <a href="#">work</a>
          </li>
          <li>
            <a href="#">playground</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
