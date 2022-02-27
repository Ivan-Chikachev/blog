import React, {createContext, useContext, useState} from 'react';
import { LS } from '../loacalStorage/localStorage';
import {IThemeContextProps, ThemeType} from "../types/types";

const ThemeContext = createContext<IThemeContextProps>({
    theme: 'light'
} as IThemeContextProps);

export const UseTheme: React.FC = ({ children }) => {

    const defaultTheme = LS.getTheme() === 'dark' ?  'dark' : 'light'

    const [theme, setTheme] = useState<ThemeType>(defaultTheme)

    const setCurrentTheme = (theme: ThemeType) => {
        LS.setTheme(theme)
        setTheme(theme)
    }

    return <ThemeContext.Provider value={{
        theme: theme,
        setTheme: setCurrentTheme
    }}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext);