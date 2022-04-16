import React from "react";
const HomeHeader = React.lazy(() => import("components/common/HomeHeader"));
const Home = () => {
  return (
    <div>
      <HomeHeader />
    </div>
  );
};

export default Home;
