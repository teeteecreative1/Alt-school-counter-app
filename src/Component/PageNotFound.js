import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <img src="./errorpage.jpg" alt="page not found" />
      <h1>oops! page not found</h1>
      <button className="but" onClick={() => navigate("/")}>
        Previous page
      </button>
    </div>
  );
}

export default PageNotFound;
