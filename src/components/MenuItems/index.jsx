import React, { useEffect, useState } from "react";
import style from "./MenuItems.module.scss";

const MenuItems = ({ active, meal, titles, setAdd, add }) => {
    const [foods, setFoods] = useState([]);
    const [filteredFoods, setFilteredFoods] = useState([]);
   
    const handleClick = (id) => {
        setAdd((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    useEffect(() => {
        meal.forEach((m, index) => {
            if (typeof m.name !== "string" || typeof m.desc !== "string") {
                console.error(`Meal item at index ${index} has incorrect format:`, m);
            }
        });
    }, [meal]);

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
                    setFoods(data.data);
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
        if (!foods.length) return;

        if (active === "Популярные" || active === "Все") {
            setFilteredFoods(foods);
        } else {
            setFilteredFoods(
                foods.filter(
                    (m) => m.name.trim().toLowerCase() === active.trim().toLowerCase()
                )
            );
        }
    }, [active, foods]);

    return (
        <div className={titles === "home" ? style.meale : style.meal_orders}>
            {filteredFoods.map((m) => (
                <div
                    key={m.id}
                    className={add?.includes(m.id) ? style.back_meal : ""}
                    onClick={() => titles !== "home" && handleClick(m.id)}
                >
                    <div>
                        <div className={style.desc_meal}>
                            <h1>{m.name}</h1>
                            <p>{m.description}</p>
                        </div>
                        {titles !== "home" && <h3>{m.price} UZS</h3>}
                    </div>
                    <div>
                        <img
                            src={`https://service.res.as-system.uz/${m.image?.smallestAbsolutePath}`}
                            alt={m.image?.originalName || "Food Image"}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuItems;
