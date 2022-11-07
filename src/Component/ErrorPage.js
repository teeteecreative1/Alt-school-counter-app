import React from "react";

// an error to test the error boundary functionality
function ErrorPage(name) {
  if (name === "favour") {
    throw new console.error("You are fake");
  }

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

export default ErrorPage;
