import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();


export const CustomThemeProvider = ({ children }) => {
    const [currTheme, setCurrTheme] = useState(() => {
        const savedTheme = localStorage.getItem('selectedTheme');
        return savedTheme || 'samaa-theme';
    });
     const [darkMode, setDarkMode] = useState(() => {
        const savedMood = localStorage.getItem('darkMode');
        return savedMood === 'true';
    })
    const root = document.documentElement;
    useEffect(() => {
        // remove all old themes
        root.classList.remove('samaa-theme', 'hawaa-theme', 'dark');

        // Add curr theme as a class
        root.classList.add(`${currTheme}-theme`);

        // Add darkMode if Choden
        if (darkMode) {
            root.classList.add('dark')
        }

        // Save Chose
        localStorage.setItem('selectedTheme', currTheme);
        localStorage.setItem('darkMode', darkMode.toString());
    }, [currTheme, darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <ThemeContext.Provider value={{ currTheme, setCurrTheme, darkMode, toggleDarkMode }} >
            {children}
        </ThemeContext.Provider>
    )
}