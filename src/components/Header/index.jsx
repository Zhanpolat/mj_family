import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/HeadImg/Group 8096.png";
import style from './Header.module.scss'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const navigate = useNavigate()
    const [menu, setMenu] = useState(false)

    const dawn = (top) => {
        navigate('/')
        window.scrollTo(0, top)
    }

    useEffect(() => {
        setMenu(false)
    }, [])

    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.header_wrap}>
                    <Link>
                        <img src={logo} alt="logo" />
                    </Link>
                    <div>
                        <ul className={menu ? style.show : ''}>
                            <li>
                                <button className={style.menu_icon} onClick={() => setMenu(false)}>
                                    <CloseIcon />
                                </button>
                                <Link onClick={() => dawn(0)}>Главная</Link>
                                <Link onClick={() => dawn(660)}>О нас</Link>
                                <Link onClick={() => menu ? dawn(1150) : dawn(1500)}>Меню</Link>
                            </li>
                            <li>
                                <Link to="/orders"><button className={style.bron_btn}>Бронирование</button></Link>
                            </li>
                        </ul>
                    </div>
                    <button className={style.menu_icon} onClick={() => setMenu(true)}>
                        <MenuIcon />
                    </button>
                </div>
            </div>
        </header >
    );
}

export default Header;