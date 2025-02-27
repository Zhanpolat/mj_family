import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import style from './HomeAdmin.module.scss'
import HomeIcon from '@mui/icons-material/Home';
import TableBarIcon from '@mui/icons-material/TableBar';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import PersonIcon from '@mui/icons-material/Person';
import logo from "../../../assets/HeadImg/Group 8096.png";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LogoutIcon from '@mui/icons-material/Logout';

const pages = [
    {
        title: 'dashboard',
        icon: <HomeIcon />,
        name: 'dashboard'
    },
    {
        title: 'Забронированные столы',
        icon: <TableBarIcon />,
        name: 'stol'
    },
    {
        title: 'Категория',
        icon: <SpaceDashboardIcon />,
        name: 'categoriya'
    },
    {
        title: 'Блюда',
        icon: <FoodBankIcon />,
        name: 'blyuda'
    },
    {
        title: 'Профиль',
        icon: <PersonIcon />,
        name: 'profil'
    }
]

function HomeAdmin() {
    const [miniMenu, setMiniMenu] = useState(false)
    const [title, setTitle] = useState('')
    const location = useLocation();
    const currentPath = location.pathname.split('/').pop();

    const handlReplacement = (bool) => {
        window.location.reload()
        setMiniMenu(!bool)
    }

    useEffect(() => {
        currentPath ? setTitle(currentPath) : setTitle('')
    }, [])

    return (
        <div className={style.admin}>
            <header>
                <div>
                    <div>
                        <Link>
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                <path d="M20.5 11.0016V16.6903" stroke="#292D32" stroke-width="2.5625" stroke-miterlimit="10" stroke-linecap="round" />
                                <path d="M20.5341 3.41666C14.2474 3.41666 9.15661 8.50749 9.15661 14.7942V18.3817C9.15661 19.5433 8.67828 21.2858 8.08036 22.2767L5.91078 25.8983C4.57828 28.1362 5.50078 30.6304 7.96078 31.4504C16.1266 34.1667 24.9587 34.1667 33.1245 31.4504C35.4308 30.6817 36.4216 27.9825 35.1745 25.8983L33.0049 22.2767C32.407 21.2858 31.9287 19.5262 31.9287 18.3817V14.7942C31.9116 8.54166 26.7866 3.41666 20.5341 3.41666Z" stroke="#292D32" stroke-width="2.5625" stroke-miterlimit="10" stroke-linecap="round" />
                                <path d="M26.1885 32.1505C26.1885 35.2768 23.626 37.8393 20.4998 37.8393C18.9452 37.8393 17.5102 37.1901 16.4852 36.1651C15.4602 35.1401 14.811 33.7051 14.811 32.1505" stroke="#292D32" stroke-width="2.5625" stroke-miterlimit="10" />
                            </svg>
                        </div>
                        <div className={style.user}>
                            <div>
                                <h1>Jenny Wilson</h1>
                                <p>Администратор</p>
                            </div>
                            <div>
                                <img src=".skjdskj" alt="user" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={miniMenu ? style.mini : ''}>
                <aside>
                    <ul>
                        <li>
                            <button onClick={() => handlReplacement(miniMenu)}>
                                <span style={{ display: miniMenu ? 'none' : 'flex' }}>
                                    <KeyboardArrowLeftIcon />
                                </span>
                                <span style={{ display: !miniMenu ? 'none' : 'flex' }}>
                                    <KeyboardArrowRightIcon />
                                </span>
                            </button>
                        </li>
                        {pages.map((page, index) => (
                            <li key={index} className={page.title === (title === '' ? 'dashboard' : title) ? style.li_active : ''} >
                                <Link
                                    to={page.title !== 'dashboard' ? `/admin/${page.name}` : '/admin'}
                                    onClick={() => setTitle(page.title)}
                                >
                                    <span>{page.icon}</span>
                                    <p style={{ display: miniMenu ? 'none' : 'inline' }}>{page.title}</p>
                                </Link>
                            </li>
                        ))}
                        <div>
                            <button>
                                <LogoutIcon />
                                <span style={{ display: miniMenu ? 'none' : 'inline' }}>Выход</span>
                            </button>
                        </div>
                    </ul>
                </aside>
                <div className={style['admin-content']}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default HomeAdmin
