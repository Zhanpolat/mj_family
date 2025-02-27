import React, { useState } from 'react'
import style from './Categoriya.module.scss'
import axios from 'axios'
import UpdateCategory from './UpdateCategory'

const Categoriya = () => {
  const [show, setShow] = useState(false)
  const [catId, setCatId] = useState(false)
  const [category, setCategory] = useState([])

  const cat = axios.get('https://service.res.as-system.uz/v1/menu/category').then((cat) => {
    setCategory(cat.data)
  })

  const updateCateory = (id) => {
    setCatId(id)
    setShow(true)
  }

  const handdleDelete = (id) => {
    const cat = axios.delete(`https://service.res.as-system.uz/v1/menu/category/${id}`).then((cat) => {
      setCategory(cat.data)
    })
  }

  return (
    <div className={style.categoriya}>
      <div>
        <h1>Категория</h1>
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
            {category.map((ca) => (
              <div key={ca.id}>
                <div>
                  <h3>{ca.name}</h3>
                </div>
                <div>
                  <button onClick={() => updateCateory(ca.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                      <path d="M5.3692 19.24L20.6965 4.45L16.8621 0.75L1.53477 15.54L1.52441 19.25L5.3692 19.24Z" stroke="#6F767E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <button onClick={() => handdleDelete(ca.id)}>
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
      <UpdateCategory show={show} catId={catId} />
    </div>
  )
}

export default Categoriya