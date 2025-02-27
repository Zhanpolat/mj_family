import React, { useEffect, useState } from 'react'
import style from './Place.module.scss'
import FormBtn from '../FormBtn'
import Orders from '../Orders'
import Kabina from '../Kabina'

const Place = ({ title, next, setPlace }) => {
  const [color, setColor] = useState(0)

  const handlColor = (index) => {
    setPlace(index)
    setColor(index)
  }

  return (
    <div>
      <div className={`${style.table} ${next ? style.hide : ''}`}>
        {title !== 'Кабина' ?
          <Orders color={color} handlColor={handlColor} next={next} />
          :
          <Kabina color={color} handlColor={handlColor} />
        }
      </div>
    </div>
  )
}

export default Place