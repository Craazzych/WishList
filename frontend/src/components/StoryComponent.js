"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MainComponent from "./MainComponent";


function StoryComponent() {
    const [wishes, setWishes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5001/wishes").then((response) => {
            setWishes(response.data);
        });
    }, []);

    const handleAddWish = () => {
        const wish = prompt("Enter your wish:");
        const description = prompt("Enter wish description:");
        if (wish && description) {
            axios
                .post("http://localhost:5001/wishes", { wish, description })
                .then((response) => {
                    setWishes([...wishes, response.data]);
                });
        }
    };

    const handleEditWish = (id) => {
        const wishItem = wishes.find((wish) => wish.id === id);
        if (wishItem) {
            const updatedWish = prompt("Edit your wish:", wishItem.wish);
            const updatedDescription = prompt(
                "Edit your wish description:",
                wishItem.description
            );
            if (updatedWish && updatedDescription) {
                axios
                    .put(`http://localhost:5001/wishes/${id}`, {
                        wish: updatedWish,
                        description: updatedDescription,
                    })
                    .then(() => {
                        setWishes(
                            wishes.map((wish) =>
                                wish.id === id
                                    ? { ...wish, wish: updatedWish, description: updatedDescription }
                                    : wish
                            )
                        );
                    });
            }
        }
    };

    const handleDeleteWish = (id) => {
        axios.delete(`http://localhost:5001/wishes/${id}`).then(() => {
            setWishes(wishes.filter((wish) => wish.id !== id));
        });
    };

    return (
        <div className="p-10 bg-gray-100 min-h-screen flex items-center justify-center">
            <MainComponent
                wishes={wishes}
                onAddWish={handleAddWish}
                onEditWish={handleEditWish}
                onDeleteWish={handleDeleteWish}
            />
        </div>
    );
}

export default StoryComponent;
