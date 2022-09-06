import React from "react";
import './Navbar.css'
import Img from './img/logo.png'
export default function Navbar() {
    return (
        <div className="navbar">
            <img src={Img} alt='logo'/>
            <a href="/">Головна</a>
            <a href="/about">Про нас</a>
            <a href="/consult">Консультації</a>
            <div className="dropdown">
                <button className="dropbtn">Курси
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="/duhpsy">КДП</a>
                    <a href="/subpsy">КСП</a>
                    <a href="/taro">Курс таро</a>
                    {/*<a href="#">Курс астропсихології</a>*/}
                </div>
            </div>
                <div className="dropdown">
                    <button className="dropbtn">Навчання
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Очне</a>
                        <a href="#">Заочне</a>
                        <a href="#">Купити курс</a>
                        <a href="/webinars">Вебінари</a>
                        {/*<a href="#">Виїздні семінари</a>*/}
                    </div>
            </div>
            <a href="/contact">Контакти</a>
        </div>
            /*<a><img className='fb-link' src="https://img.icons8.com/fluency/48/000000/facebook.png"/></a>*/

    )
}