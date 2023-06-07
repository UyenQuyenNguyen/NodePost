import { colors, createTheme } from "@mui/material";
import { createContext, useState } from "react";
import { black, white } from '@mui/material/colors';

export const ThemeContext = createContext(null);
export const ThemeProvider = ({ children }) => {
    const [isLight, setIsLight] = useState(true);
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#ffffff',
            },
            secondary: {
                main: '#ffffff',
              },
        },
    });
    const lightTheme = createTheme({
        palette: {
            action: {
                active: "#000000",
                selected: "#444444"
            }, 
            text: {
               primary: "#000000" 
            }
        },
        
    });
    let theme = null;
    if (isLight) {
        theme = lightTheme
    } else {
        theme = darkTheme
    }
    return (
        <ThemeContext.Provider value={{ isLight, setIsLight, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider