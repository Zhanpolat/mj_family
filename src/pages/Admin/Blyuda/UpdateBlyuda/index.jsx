import axios from "axios";
import React, { useEffect, useState } from "react";

const UpdateBlyuda = ({ show, id }) => {
    const [food, setFood] = useState([]);
    const [updatedName, setUpdatedName] = useState("");
    const [category, setCategory] = useState([])

    const cat = axios.get('https://service.res.as-system.uz/v1/menu/category').then((cat) => {
        setCategory(cat.data)
    })

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://service.res.as-system.uz/v1/menu/food");
                setFood(response.data);

                const selectedCategory = response.data.find((cat) => cat.id === id);
                if (selectedCategory) {
                    setUpdatedName(selectedCategory.name);
                }
            } catch (error) {
                console.error("Ma'lumot olishda xatolik:", error);
            }
        };

        fetchCategories();
    }, [id]);

    const handleUpdate = async () => {
        try {
            await axios.put(`https://service.res.as-system.uz/v1/menu/food/${id}`, {
                name: updatedName,
            });
        } catch (error) {
            console.error("Kategoriya yangilashda xatolik:", error);
        }
    };

    return (
        <div>
            <div>
                <h1>Добавление блюда</h1>
                <form>
                    <div>
                        <label>Название блюда*</label>
                        <input
                            type="text"
                            value={updatedName}
                            onChange={(e) => setUpdatedName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Информация о блюде*</label>
                        <input
                            type="text"
                            value={updatedName}
                            onChange={(e) => setUpdatedName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Категория</label>
                        <select>
                            {category.map((cat) => {
                                <option value={cat.name}>{cat.name}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <label>Фото *</label>
                        <input type="file" />
                    </div>

                    <button onClick={() => handleUpdate()}>Добавить</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateBlyuda