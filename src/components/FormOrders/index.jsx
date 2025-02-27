import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToOrders } from '../../store/slice/ordersSlice';
import style from './Form.module.scss';
import FormBtn from '../FormBtn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const handleSubmit = async (e, setPlace, title, setModal, dispatch, formData, setFormData, cabinTableId, getOrders) => {
    e.preventDefault();
    await dispatch(addToOrders({ ...formData, cabinTableId, title }));
    await setModal(true);
    await setFormData({ fullName: '', phone: '', startDate: '', endDate: '' });
    await setPlace(null);
    getOrders(localStorage.getItem('orders'))
};

const FormOrders = ({ cabinTableId, setPlace, title, setModal, setNext, next, setShowHide, formData, setFormData }) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [isDisabledMini, setIsDisabledMini] = useState(true);
    const dispatch = useDispatch();
    const hozirgiVaqt = new Date();
    const dateTimeRefOld = useRef(null);
    const dateTimeRefNew = useRef(null);

    const handleIconClickOld = () => {
        dateTimeRefOld.current.showPicker();
    };

    const handleIconClickNew = () => {
        dateTimeRefNew.current.showPicker();
    };

    const yil = hozirgiVaqt.getFullYear();
    const oy = String(hozirgiVaqt.getMonth() + 1).padStart(2, '0');
    const kun = String(hozirgiVaqt.getDate()).padStart(2, '0');

    const soat = String(hozirgiVaqt.getHours()).padStart(2, '0');
    const minut = String(hozirgiVaqt.getMinutes()).padStart(2, '0');

    const formatlanganVaqt = `${yil}-${oy}-${kun} ${soat}:${minut}`;

    const inputRef = useRef(null);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.showPicker();
            inputRef.current.click();
        }
    };

    useEffect(() => {
        const { fullName, phone, startDate, endDate } = formData;
        setIsDisabled(!(fullName && phone && startDate && endDate && cabinTableId));
        setIsDisabledMini(!(fullName && phone && startDate && endDate));
    }, [formData, cabinTableId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const renderInput = (label, name, type) => (
        <label onClick={name === 'startDate' || name === 'endDate' ? handleClick : undefined} >
            {label} <span style={{ color: formData[name] ? 'black' : 'red' }}>*</span>
            {name === 'startDate' || name === 'endDate' ?
                <div>
                    {formData[name] ? formData[name].split('T').join(' ') : formatlanganVaqt}
                    <div onClick={name === 'startDate' ? handleIconClickOld : handleIconClickNew}>
                        <CalendarMonthIcon />
                    </div>
                    <input
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        placeholder={name === 'phone' ? '+998' : 'Name'}
                        id={name}
                        ref={name === 'startDate' ? dateTimeRefOld : dateTimeRefNew}
                    />
                </div> :
                <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={name === 'phone' ? '+998' : 'Name'}
                />
            }
        </label>
    );

    const dawn = (e, p) => {
        e.preventDefault()
        window.scrollTo(0, p)
    }

    const handlNext = (e) => {
        e.preventDefault();
        setNext(true)
    }

    return (
        <div>
            <div className={style.form}>
                <div style={{ display: !next ? 'block' : 'none' }}>
                    <form>
                        <h1>Забронировать <span>?</span></h1>
                        {renderInput('Фамилия Имя', 'fullName', 'text')}
                        {renderInput('Телефон номер', 'phone', 'phone')}
                        {renderInput('Время прихода', 'startDate', 'datetime-local')}
                        {renderInput('Время ухода', 'endDate', 'datetime-local')}
                        <button
                            disabled={isDisabledMini}
                            className={style.dale}
                            onClick={(e) => handlNext(e)}
                            style={{
                                backgroundColor: !isDisabledMini ? 'rgba(127, 57, 39, 1)' : 'rgba(0, 0, 0, 0.2)',
                                color: !isDisabledMini ? '#fff' : '#333'
                            }}
                        >Дальше</button>
                    </form>
                </div>
                <FormBtn
                    isDisabled={isDisabled}
                    dawn={dawn} next={!next}
                    handleSubmit={handleSubmit}
                    setShowHide={setShowHide}
                    setPlace={setPlace}
                    title={title}
                    setModal={setModal}
                    dispatch={dispatch}
                    formData={formData}
                    cabinTableId={cabinTableId}
                    setFormData={setFormData}
                />
            </div>
        </div>
    );
};

export default FormOrders;