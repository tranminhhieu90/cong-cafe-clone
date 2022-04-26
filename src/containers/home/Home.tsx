import Sliders from "components/home/sliders/sliders";
import React from "react";
const HomeHeader = React.lazy(
  () => import("components/common/header/HomeHeader")
);
const Home = () => {
  return (
    <>
      <HomeHeader />
      <Sliders />
    </>
  );
};

export default Home;
