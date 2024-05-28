"use client";
import React from "react";

function MainComponent({ wishes, onAddWish, onEditWish, onDeleteWish }) {
    const titleFontClass = "font-['Arial']";
    const bodyFontClass = "font-['Georgia']";

    return (
        <div className="p-4 bg-[#f9f9f9] rounded shadow-md w-full max-w-[600px] mx-auto">
            <h1
                className={`text-2xl font-bold ${titleFontClass} mb-4 text-[#333333] text-center`}
            >
                My Wishlist
            </h1>
            <p className={`mb-4 ${bodyFontClass} text-[#333333] text-center`}>
                Keep track of your wishes and goals. Easily add, edit, or delete items
                to manage your wishlist efficiently.
            </p>
            <div className="space-y-4">
                {wishes.map((wish) => (
                    <div
                        key={wish.id}
                        className={`flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-md rounded ${bodyFontClass} text-[#333333]`}
                    >
                        <div className="flex-grow">
                            <h2 className="text-xl font-semibold">{wish.wish}</h2>
                            <p className="text-gray-600">{wish.description}</p>
                        </div>
                        <div className="flex space-x-2 mt-2 md:mt-0">
                            <button
                                className="text-[#6200ea] hover:text-[#4500a5] underline"
                                onClick={() => onEditWish(wish.id)}
                            >
                                Edit
                            </button>
                            <button
                                className="text-red-500 hover:text-red-700 underline"
                                onClick={() => onDeleteWish(wish.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="w-full text-white bg-[#6200ea] hover:bg-[#4500a5] py-2 rounded mt-4"
                onClick={onAddWish}
            >
                Add Wish
            </button>
        </div>
    );
}

export default MainComponent;
