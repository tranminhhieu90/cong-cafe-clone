import React from "react";
const HomeHeader = React.lazy(
  () => import("components/common/header/HomeHeader")
);
const Home = () => {
  return <HomeHeader />;
};

export default Home;
