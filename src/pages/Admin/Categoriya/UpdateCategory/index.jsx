import axios from "axios";
import React, { useEffect, useState } from "react";

const UpdateCategory = ({ show, id }) => {
    const [categories, setCategories] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState([]);
    const [updatedName, setUpdatedName] = useState("");

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://service.res.as-system.uz/v1/menu/category");
                setCategories(response.data);
            } catch (error) {
                console.error("Ma'lumot olishda xatolik:", error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const filtered = categories.filter((u) => u.id === id);
        setFilteredCategory(filtered);
        if (filtered.length > 0) {
            setUpdatedName(filtered[0].name);
        }
    }, [categories, id]);

    const handleUpdate = async () => {
        try {
            await axios.put(`https://service.res.as-system.uz/v1/menu/category/${id}`, {
                name: updatedName,
            });
            alert("Kategoriya muvaffaqiyatli yangilandi!");
        } catch (error) {
            console.error("Kategoriya yangilashda xatolik:", error);
        }
    };

    return (
        <div style={{ display: show ? 'block' : 'none' }}>
            <div>
                <form>
                    <label>Название категории*</label>
                    <input
                        type="text"
                        value={updatedName}
                        onChange={(e) => setUpdatedName(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Добавить</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCategory;