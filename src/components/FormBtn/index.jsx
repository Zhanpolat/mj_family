import React from 'react';
import style from './FormBtn.module.scss';
import { deleteOrders } from '../../store/slice/ordersSlice';

const FormBtn = ({ isDisabled, dawn, next, handleSubmit, setShowHide, setPlace, title, setModal, dispatch, formData, setFormData, cabinTableId }) => {
    const handlDawn = (e, n) => {
        setShowHide(true);
        dawn(e, n);
        dispatch(deleteOrders());
    };

    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZXMxMjM0NSIsInJvbGVzIjpbIkdFTkVSQUwiXSwiZXhwIjoxNzQwNjE3MTIzfQ.LY-ngFlptGn4RSVVu4lZThadvG3BJYGn5n0M-vW0wtI'

    const getOrders = (data) => {
        console.log("Sending data:", data); // Логирование данных перед отправкой

        fetch('https://service.res.as-system.uz/v1/public/order', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`, // Добавьте токен, если требуется
                "X-Page-Analytics": '315186e3-6347-4092-8e86-45e6e669fb82'
            },
            body: JSON.stringify({ orderData: data }) // Исправьте поле, если требуется
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(result => console.log("Response:", result))
            .catch(error => console.error("Fetch error:", error));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(e, setPlace, title, setModal, dispatch, formData, setFormData, cabinTableId, getOrders);
    };

    return (
        <div className={`${style.form_btn} ${next ? style.hide : style.show}`}>
            <button
                className={style.btnForm}
                type="submit"
                disabled={isDisabled}
                onClick={handleFormSubmit}
                style={{
                    backgroundColor: isDisabled ? 'rgba(0, 0, 0, 0.1)' : 'rgba(127, 57, 39, 1)',
                    color: isDisabled ? 'rgba(0, 0, 0, 1)' : '#fff'
                }}
            >
                Забронировать
            </button>
            <button onClick={(e) => handlDawn(e, 1060)} type="button">Заказать блюда</button>
        </div >
    );
};

export default FormBtn;