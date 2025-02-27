import React, { useEffect, useState } from 'react'
import style from './ModalOrders.module.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Modal from '../Modal';
import { addToOrders } from '../../store/slice/ordersSlice';

const ModalOrders = ({ cabinTableId, formData, add, modal, setModal, setrShow, setPlace, title, dispatch, setFormData }) => {
    const [addMeal, setAddMeal] = useState([]);
    const [meal, setMeal] = useState([]);
    const [filterMeal, setFilterMeal] = useState([]);
    const [counts, setCounts] = useState({});

    const old = formData?.startDate ? formData.startDate.split('T').join(' ') : "";
    const dat = formData?.endDate ? formData.endDate.split('T').join(' ') : '';

    const handleHideShow = (e) => {
        e.preventDefault();
        setrShow(false);

        const updatedMeals = filterMeal.map(m => ({
            ...m,
            count: counts[m.id] || 1
        }));

        dispatch(addToOrders({
            ...formData,
            cabinTableId,
            title,
            foods: updatedMeals
        }));

        setModal(true);
        setFormData({ fullName: '', phone: '', startDate: '', endDate: '' });
        setPlace(null);
    };


    useEffect(() => {
        if (add && meal.length) {
            const meals = meal.filter((m) => add.includes(m.id));
            setAddMeal(meals);
            setCounts(meals.reduce((acc, m) => ({ ...acc, [m.id]: 1 }), {}));
        }
    }, [add, meal]);

    useEffect(() => {
        const controller = new AbortController();
        fetch("https://service.res.as-system.uz/v1/public/menu/food", {
            method: "GET",
            headers: {
                "X-Page-Analytics": "315186e3-6347-4092-8e86-45e6e669fb82",
            },
            signal: controller.signal,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data && Array.isArray(data.data)) {
                    setMeal(data.data);
                } else {
                    console.error("API javobi noto‘g‘ri formatda:", data);
                }
            })
            .catch((error) => {
                if (error.name !== "AbortError") {
                    console.error("Error:", error);
                }
            });

        return () => controller.abort();
    }, []);

    useEffect(() => {
        if (addMeal.length > 0 && meal.length > 0) {
            const filtered = meal.filter((m) => addMeal.some((a) => a.id === m.id));
            setFilterMeal(filtered);
        } else {
            setFilterMeal([]);
        }
    }, [addMeal, meal]);

    const handleIncrease = (id) => {
        setCounts((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
    };

    const handleDecrease = (id) => {
        setCounts((prev) => ({ ...prev, [id]: Math.max(1, (prev[id] || 1) - 1) }));
    };

    return (
        <div>
            <div className={style.modal_orders}>
                <div>
                    <div>
                        <div>
                            <button onClick={() => setrShow(false)}><ArrowBackIosNewIcon /></button>
                            <h1>Краткое описание бронирование</h1>
                        </div>
                        <ul>
                            <li>
                                <p>Фамилия Имя</p>
                                <h5>{formData?.fullName}</h5>
                            </li>
                            <li>
                                <p>Телефон номер</p>
                                <h5>{formData?.phone}</h5>
                            </li>
                            <li>
                                <p>Время прихода</p>
                                <h5>{old}</h5>
                            </li>
                            <li>
                                <p>Время ухода</p>
                                <h5>{dat}</h5>
                            </li>
                            <li>
                                <p>Номер стола</p>
                                <h5>{cabinTableId}</h5>
                            </li>
                        </ul>
                        {Array.isArray(addMeal) && addMeal.length > 0 ? (
                            <ul>
                                <li>Заказ блюда</li>
                                {addMeal.map((a) => (
                                    <li key={a.id}>
                                        <p>{a?.name || "Неизвестное блюдо"}</p>
                                        <div className={style.count_btn}>
                                            <button onClick={() => handleDecrease(a.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M12.575 15L13.75 13.825L9.93333 10L13.75 6.175L12.575 5L7.575 10L12.575 15Z" fill="black" />
                                                </svg>
                                            </button>
                                            <span>{counts[a.id] || 1}</span>
                                            <button onClick={() => handleIncrease(a.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
                                                    <path d="M1.175 0L0 1.175L3.81667 5L0 8.825L1.175 10L6.175 5L1.175 0Z" fill="black" />
                                                </svg>
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <ul><li>нет заказ</li></ul>
                        )}
                        <div className={style.confirm}>
                            <button onClick={handleHideShow}>Потвердить</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Modal modal={modal} setModal={setModal} addMeal={addMeal} formData={formData} old={old} dat={dat} />
            </div>
        </div>
    );
}

export default ModalOrders;