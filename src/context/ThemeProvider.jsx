import ThemeContext from "./ThemeContext";
import { useEffect, useState } from "react";

function ThemeProvider({ children }) {
    
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
    });

    useEffect(() => {
        console.log('Current theme:', theme);

        const root = window.document.documentElement;
        const body = window.document.body;
        const nextTheme = theme === 'dark' ? 'dark' : 'light';

        root.classList.remove('light', 'dark');
        body.classList.remove('light', 'dark');

        root.classList.add(nextTheme);
        body.classList.add(nextTheme);

        localStorage.setItem('theme', nextTheme);

    }, [theme]);

    function toggleTheme() {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
                isDark: theme === 'dark',
            }}
        >
            {children}
        </ThemeContext.Provider>
    );

}

export default ThemeProvider