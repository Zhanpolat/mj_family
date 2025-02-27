import React, { useEffect, useState } from 'react'
import style from './Menu.module.scss'
import MenuBtn from '../MenuBtn'
import MenuItems from '../MenuItems'
import ModalOrders from '../ModalOrders'
import axios from 'axios'

const Menu = ({
  titles,
  setActive,
  active,
  btn,
  meal,
  setAdd = () => { },
  add = [],
  cabinTableId = null,
  formData = {},
  setShowHide = () => { },
  modal = false,
  setModal = () => { },
  setPlace = () => { },
  title = "",
  dispatch = () => { },
  setFormData = () => { }
}) => {
  const [show, setrShow] = useState(false);
  const [disableShow, setDisabledShow] = useState(true);


  useEffect(() => {
    setrShow(false);
  }, []);

  useEffect(() => {
    const { fullName = '', phone = '', startDate = '', endDate = '' } = formData || {};
    setDisabledShow(!(fullName && phone && startDate && endDate && cabinTableId));
  }, [formData, cabinTableId]);

  const handlDisale = (e) => {
    e.preventDefault();
    setrShow(true);
  };

  return (
    <div className={titles === 'orders' ? style.menu_orders : style.menu}>
      <div className="container">
        <div>
          <h1>Меню</h1>
          <div>
            <MenuBtn setActive={setActive} active={active} btn={btn} titles={titles} />
            <MenuItems active={active} meal={meal} titles={titles} setAdd={setAdd} add={add} />
          </div>
          <div className={style.menu_btn} style={{ display: titles === 'home' ? 'none' : 'flex' }}>
            <button onClick={() => setShowHide(false)}>Отменить</button>
            <button disabled={disableShow} onClick={handlDisale}>
              Заказать
            </button>
          </div>
        </div>
      </div>
      {show && (
        <ModalOrders
          cabinTableId={cabinTableId}
          formData={formData}
          add={add}
          meal={meal}
          modal={modal}
          setModal={setModal}
          setrShow={setrShow}
          setPlace={setPlace}
          title={title}
          dispatch={dispatch}
          setFormData={setFormData}
        />
      )}
    </div>
  );
};

export default Menu;
