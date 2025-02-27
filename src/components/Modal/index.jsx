import React, { useEffect, useState } from "react";
import style from "./Modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import DoneIcon from "@mui/icons-material/Done";
import DateRangeIcon from "@mui/icons-material/DateRange";
import TableBarIcon from "@mui/icons-material/TableBar";
import { deleteOrders } from "../../store/slice/ordersSlice";

const Modal = ({ modal, setModal, addMeal }) => {
    const check = useSelector((state) => state.orders.orders);
    const dispatch = useDispatch()

    const handleUpdate = () => {
        setModal(false);
        dispatch(deleteOrders())
        window.location.reload();
    };

    const [oldData, setOldData] = useState("");
    const [newData, setNewData] = useState("");
    const [oldTime, setOldTime] = useState("");
    const [newTime, setNewTime] = useState("");

    const formatDate = (datetime) => {
        if (!datetime) return "";
        return new Date(datetime).toISOString().split("T")[0].split("-").reverse().join(".");
    };

    const formatTime = (datetime) => {
        if (!datetime) return "";
        return new Date(datetime).toTimeString().split(" ")[0].slice(0, 5);
    };

    useEffect(() => {
        if (check.length > 0) {
            const latestOrder = check[check.length - 1];
            setOldData(formatDate(latestOrder.startDate));
            setNewData(formatDate(latestOrder.endDate));
            setOldTime(formatTime(latestOrder.startDate));
            setNewTime(formatTime(latestOrder.endDate));
        }
    }, [check]);

    return (
        <div className={style.modal} style={modal ? {
            position: 'fixed',
            inset: 0,
            width: '100%',
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            opacity: '1',
            pointerEvents: 'all',
            visibility: 'visible',
            zIndex: '9999'
        } : {
            opacity: '0',
            pointerEvents: 'none',
            visibility: 'hidden',
            zIndex: '-9999',
            display: 'none'
        }}>
            <div className={style.modalContent}>
                <div className={style.iconWrapper}>
                    <DoneIcon />
                </div>

                {check.map((ch, index) => (
                    <ul key={index} className={style.modalList}>
                        <li>
                            <h2>Стол забронирован</h2> Успешно
                        </li>
                        <li>
                            <h3>{ch.fullName}</h3>
                            <h3>{ch.phone}</h3>
                        </li>
                        <li>
                            <div className={style.dateTimeWrapper}>
                                <DateRangeIcon />
                                <div>
                                    <span>{newData}</span>
                                </div> |
                                {oldData && newData ? (
                                    oldData === newData ? (
                                        <>
                                            <span>{oldTime || "??:??"}</span> - <span>{newTime || "??:??"}</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>{oldData || "DD.MM.YYYY"}</span> | <span>{newData || "DD.MM.YYYY"}</span>
                                        </>
                                    )
                                ) : (
                                    <span>Yuklanmoqda...</span>
                                )}
                            </div>
                            <span>
                                <TableBarIcon /> {ch.cabinTableId} стол
                            </span>
                        </li>
                        <li style={{ display: ch.foods.length ? 'flex' : 'none' }}>
                            <h2>Заказ блюда</h2>
                        </li>
                        <li style={{ display: ch.foods.length ? 'flex' : 'none' }} className={style.orders_meal}>
                            <div>
                                <span>Назание</span>
                                <span>Количество</span>
                                <span>Сумма</span>
                            </div>
                            {ch.foods.map((m) => (
                                <div>
                                    <span>{m.name}</span>
                                    <span>{m.count}</span>
                                    <span>{m.price * m.count}</span>
                                </div>
                            ))}
                        </li>
                        {addMeal &&
                            addMeal.map((add, idx) => <li key={idx}>{add}</li>)}
                        <li>
                            <button className={style.closeButton} onClick={() => handleUpdate()}>
                                Закрыть
                            </button>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default Modal;
