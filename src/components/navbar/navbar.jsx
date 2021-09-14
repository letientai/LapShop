import "./navbar.scss";
import React from "react";
import icon from '../../imgs/laptop.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div className='options'>
            <a className='option'>
                TRANG CHỦ
            </a>
            <a className='option'>
                GIỚI THIỆU
            </a>
            <a className='option'>
                LIÊN HỆ
            </a>
            <a className='option'>
                PHẢN HỒI
            </a>
        </div>
    </div>
  );
}

export default Navbar;
