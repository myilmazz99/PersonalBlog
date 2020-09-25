import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const PageLoading = () => {
  const wrapper = {
    height: "100vh",
    width: "100wh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={wrapper}>
      <LoadingSpinner />
    </div>
  );
};

export default PageLoading;
