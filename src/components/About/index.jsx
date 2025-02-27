import React from 'react'
import style from './About.module.scss'

const About = () => {
    return (
        <section className={style.about}>
            <div className="container">
                <div className={style.about_we}>
                    <div className={style.title}>
                        <h1 className={style.title_h1}>О нас</h1>
                        <p className={style.subtitle}>
                            MJ Family - это уникальное место, где вы можете почувствовать
                            себя как дома, ощутить семейное тепло и уют.
                        </p>
                    </div>
                    <div className={style.grid_container}>
                        <div className={style.big_box}></div>
                        <div className={style.text}>
                            <p>
                                Ресторан MJ Family был основан в 2021 году Мурадом
                                Джабборовым. Здесь готовятся как национальные, так и
                                международные блюда из высококачественных, натуральных
                                продуктов. Каждое блюдо - это сочетание уникальных рецептов и
                                мастерски приготовленных вкусов.
                            </p>
                        </div>
                        <div className={style.small_box_1}></div>
                        <div className={style.small_box_2}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About