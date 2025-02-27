import React, { useState } from 'react'
import style from './Menu.module.scss'
import MenuBtn from '../MenuBtn'
import MenuItems from '../MenuItems'

const Menu = () => {
    return (
        <div className={style.menu}>
            <div className="container">
                <h1>Меню</h1>
                <div>
                    <MenuBtn setActive={setActive} active={active} />
                    <MenuItems active={active} />
                    <div className={style.menu_btn}>
                        <button>Отменить</button>
                        <button>Заказать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu