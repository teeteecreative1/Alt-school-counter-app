import React from "react";

function Header() {
  return (
    <div>
      <nav className="Navigation">
        <a href="Home" target="_self">
          Home
        </a>
        <a href="PageNotFound" target="_blank">
          PageNotFound
        </a>
        <a href="ErrorPage" target="_blank">
          ErrorPage
        </a>
      </nav>
    </div>
  );
}
export default Header;
