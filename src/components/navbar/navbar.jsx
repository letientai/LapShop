import "./navbar.scss";
import React from "react";
import icon from '../../imgs/laptop.png'

function Navbar() {
  return (
    <div className="navbar">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div className="link">
        <p>Trang chủ</p>
        <p>Giới thiệu</p>
        <p>Liên hệ</p>
        <p>Phản hồi</p>
      </div>
    </div>
  );
}

export default Navbar;
