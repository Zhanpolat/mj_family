import React from "react";
import { Link } from "react-router-dom";
import imgRoom from '../../assets/Section-img/image 1.png';
import style from './HomePage.module.scss'

function Banner() {
    return (
        <>
            <section className={style.section}>
                <div className="container">
                    <div className={style.section_info}>
                        <h1 className={style.section_title}>
                            MJ Family - это уникальное место, где вы можете почувствовать себя
                            как <br /> дома, ощутить семейное <br /> тепло и уют.
                        </h1>
                        <div className={style.bron}>
                            <Link to="/orders">
                                <button className={style.btn}>Бронировать</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Banner;
