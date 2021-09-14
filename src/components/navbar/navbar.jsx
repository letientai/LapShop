import "./navbar.scss";
import React from "react";
import icon from '../../imgs/laptop.png'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div className='options'>
            <Link to='./' className='option'>TRANG CHỦ</Link>
            <Link to='./introduct' className='option'>GIỚI THIỆU</Link>
            <Link to='./' className='option'>LIÊN HỆ</Link>
            <Link to='./' className='option'>PHẢN HỒI</Link>
        </div>
    </div>
  );
}

export default Navbar;

