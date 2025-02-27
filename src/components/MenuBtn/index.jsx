import React, { useEffect, useState } from 'react'
import style from './MenuBtn.module.scss'

const MenuBtn = ({ setActive, active, btn, titles }) => {
    const [foodsBtn, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZXMxMjM0NSIsInJvbGVzIjpbIkdFTkVSQUwiXSwiZXhwIjoxNzQwNDg1ODc2fQ.Fd75pVjHFl6lRLdz-DlfC7EzwnKsnXzcEsz21o8mFHQ'

    useEffect(() => {
        fetch('https://service.res.as-system.uz/v1/public/menu/category', {
            method: 'GET',
            headers: {
                "X-Page-Analytics": "315186e3-6347-4092-8e86-45e6e669fb82",
            },
        })
            .then(response => response.json())
            .then(data => setFoods(data.data))
            .catch(error => console.error('Error:', error));

    }, []);

    return (
        <div className={style.btn_wrap}>
            <button
                onClick={() => setActive(titles === 'home' ? 'Популярные' : 'Все')}
                style={{
                    backgroundColor: active === (titles === 'home' ? 'Популярные' : 'Все') ? 'rgba(114, 0, 18, 1)' : 'transparent',
                    color: active === (titles === 'home' ? 'Популярные' : 'Все') ? '#fff' : 'rgba(0, 0, 0, 0.5)'
                }}
            >
                {titles === 'home' ? 'Популярные' : 'Все'}
            </button>
            {
                foodsBtn?.map((b) => (
                    <button
                        key={b.name}
                        style={{
                            backgroundColor: active === b.name ? 'rgba(114, 0, 18, 1)' : 'transparent',
                            color: active === b.name ? '#fff' : 'rgba(0, 0, 0, 0.5)'
                        }}
                        onClick={() => setActive(b.name)}
                    >
                        {b.name}
                    </button>
                ))
            }

        </div >
    )
}

export default MenuBtn