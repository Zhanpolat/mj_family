import React, { useState } from 'react'
import style from './Blyuda.module.scss'
import AdminModal from '../AminMOdal'
import axios from 'axios'
import UpdateBlyuda from './UpdateBlyuda'

const Blyuda = () => {
  const [show, setShow] = useState(false)
  const [foodId, setFoodId] = useState(false)
  const [food, setFood] = useState([])

  const res = axios.get('https://service.res.as-system.uz/v1/menu/food').then((r) => {
    setFood(r.data)
  })

  const handleFoodId = (id) => {
    setFoodId(id)
    setShow(true)
  }

  return (
    <div className={style.blyuda}>
      <div>
        <h1>Блюда</h1>
        <ul>
          <li>
            <button onClick={() => setShow(true)}>Добавить</button>
          </li>
          <li>
            <div>
              <p>Название категории</p>
              <p>Действия</p>
            </div>
          </li>
          <li>
            {food.map((f) => (
              <div>
                <div>
                  <img src={f.image.absolutePath} alt={r.image.originalName} />
                  <h3>{f.name}</h3>
                </div>
                <div>
                  <button onClick={() => handleFoodId(f.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                      <path d="M5.3692 19.24L20.6965 4.45L16.8621 0.75L1.53477 15.54L1.52441 19.25L5.3692 19.24Z" stroke="#6F767E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                      <path d="M18.7397 5.82959H6.02393V19.1896C6.02393 20.3196 6.97735 21.2396 8.1484 21.2396H16.6048C17.7759 21.2396 18.7293 20.3196 18.7293 19.1896V5.82959H18.7397Z" stroke="#6F767E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M4.05566 5.82959H21.0722" stroke="#6F767E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M15.7559 2.74023H9.37207V5.82024H15.7559V2.74023Z" stroke="#6F767E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M10.4287 9.75V17.14" stroke="#6F767E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M14.688 9.75V17.14" stroke="#6F767E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </li>
        </ul>
      </div>
      <UpdateBlyuda show={show} id={foodId} />
    </div>
  )
}

export default Blyuda