// src/context/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

// Custom hook to use theme
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // default: light

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme === 'dark' ? 'dark-mode' : 'light-mode'}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
