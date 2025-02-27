import React, { useEffect, useState } from 'react'
import Banner from '../../../components/Banner'
import About from '../../../components/About'
import Menu from '../../../components/Menu'
import plov from '../../../assets/menu-img/plov.png'
import plov1 from '../../../assets/menu-img/Креветки.png'
import plov2 from '../../../assets/menu-img/unsplash.png'
import plov3 from '../../../assets/menu-img/image 13.png'
import plov4 from '../../../assets/menu-img/image 5.png'
import plov5 from '../../../assets/menu-img/images.png'
import plov6 from '../../../assets/menu-img/image 4.png'
import plov7 from '../../../assets/menu-img/image 6.png'
import axios from 'axios'

const HomePage = () => {
  const [active, setActive] = useState('Популярные')
  const [category, setCategory] = useState([])

  const meal = [
    {
      name: 'Салат',
      desc: 'Помидоры, мясо, листья салата, огурцы, яйца, горошек, зеленый лук, цветная капуста.',
      img: plov
    },
    {
      name: 'Креветка',
      desc: 'Креветки, лайм, мята',
      img: plov1
    },
    {
      name: 'Рамён',
      desc: 'Помидоры, мясо, листья салата, огурцы, яйца, горошек, зеленый лук, цветная капуста.',
      img: plov2
    },
    {
      name: 'Паста',
      desc: 'Помидоры, мясо, листья салата, огурцы, яйца, горошек, зеленый лук, цветная капуста.',
      img: plov3
    },
    {
      name: 'Суп',
      desc: 'Помидоры, мясо, листья салата, огурцы, яйца, горошек, зеленый лук, цветная капуста.',
      img: plov4
    },
    {
      name: 'Паста',
      desc: 'Креветки, лайм, мята',
      img: plov5
    },
    {
      name: 'Хинкали',
      desc: 'Помидоры, мясо, листья салата, огурцы, яйца, горошек, зеленый лук, цветная капуста.',
      img: plov6
    },
    {
      name: 'Рамён',
      desc: 'Помидоры, мясо, листья салата, огурцы, яйца, горошек, зеленый лук, цветная капуста.',
      img: plov7
    },
  ]

  const btn = category

  useEffect(() => {
    const cat = axios.get('https://service.res.as-system.uz/v1/menu/category').then((cat) => {
      setCategory(cat.data)
    })
  }, [])

  return (
    <div>
      <Banner />
      <About />
      <Menu titles={'home'} active={active} setActive={setActive} btn={btn} meal={meal} />
    </div>
  )
}

export default HomePage