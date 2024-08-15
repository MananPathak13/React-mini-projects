import React from 'react'
import useLocalStorage from './useLocalStorage'
import './theme.css'

const LightDarkMode = () => {

    const [theme, setTheme] = useLocalStorage("theme", "light");

    function changeTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <div className='light-dark-mode' data-theme={theme}>
            <div className='container'>
                <p>Hello World!</p>
                <button className="button-9" onClick={changeTheme}>Change Theme</button>
            </div>
        </div>
    )
}

export default LightDarkMode
