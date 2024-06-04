"use client";
import React from "react";

function MainComponent({ wishes, onAddWish, onEditWish, onDeleteWish }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'linear-gradient(to bottom, #f0f4f8, #dfe3ee)' }}>
            {/* Верхняя часть */}
            <header style={{ backgroundColor: '#6200ea', color: 'white', padding: '1rem 0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0 }}>My Wishlist</h1>
                <p style={{ margin: '0.5rem 0 0', fontSize: '1rem' }}>
                    Keep track of your wishes and goals. Easily add, edit, or delete items to manage your wishlist efficiently.
                </p>
            </header>

            {/* Основная часть */}
            <main style={{ flexGrow: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {wishes.map((wish) => (
                        <div
                            key={wish.id}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderRadius: '0.5rem' }}
                        >
                            <div style={{ flexGrow: 1 }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>{wish.wish}</h2>
                                <p style={{ color: 'gray' }}>{wish.description}</p>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                <button
                                    style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', borderRadius: '0.25rem', fontSize: '1rem', cursor: 'pointer' }}
                                    onClick={() => onEditWish(wish.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    style={{ padding: '0.5rem 1rem', backgroundColor: '#dc3545', color: 'white', borderRadius: '0.25rem', fontSize: '1rem', cursor: 'pointer' }}
                                    onClick={() => onDeleteWish(wish.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    style={{ width: '100%', padding: '1rem', backgroundColor: '#28a745', color: 'white', borderRadius: '0.5rem', fontSize: '1.25rem', marginTop: '2rem', cursor: 'pointer' }}
                    onClick={onAddWish}
                >
                    Add Wish
                </button>
            </main>

            {/* Подвал */}
            <footer style={{ backgroundColor: '#333', color: 'white', padding: '1rem 0', textAlign: 'center' }}>
                <p style={{ margin: 0 }}>© 2024 My Wishlist App</p>
            </footer>
        </div>
    );
}

export default MainComponent;





