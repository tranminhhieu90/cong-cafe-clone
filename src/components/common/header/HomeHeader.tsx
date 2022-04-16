import React from "react";
import { navLeft, navRight } from "ultils/navMenu";
import Logo from "assets/header/logo.png";
import "./header.less";
import { Button } from "antd";
const HomeHeader = () => {
  return (
    <div className="header">
      {/* <div className="lang">vi</div> */}
      <nav className="header_menu">
        <div className="nav-left">
          <ul>
            {navLeft.map((item, index) => (
              <li className="main-menu" key={index}>
                {item.title}
                <div className="sub-menu">
                  <ul>
                    {item?.subMenu?.map((sub, index) => (
                      <li key={index}>
                        <a>{sub}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="nav-right">
          <ul>
            {navRight.map((item, index) => (
              <li className="main-menu" key={index}>
                {item.title}
                <div className="sub-menu">
                  <ul>
                    {item?.subMenu?.map((sub, index) => (
                      <li
                        onClick={() => {
                          console.log("22");
                        }}
                        key={index}
                      >
                        <a>{sub}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HomeHeader;
