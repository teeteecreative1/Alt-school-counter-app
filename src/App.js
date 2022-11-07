import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Component/PageNotFound";
import Home from "./Home";
import ErrorPage from "./Component/ErrorPage";
import ErrorBoundary from "./Component/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pagenotfound" element={<PageNotFound />} />

        <Route path="/errorpage" element={<ErrorPage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
