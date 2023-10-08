import React from 'react'

// theme options with specific colour values
export const themes = {
    light: {
        foreground: "#333333",
        background: "#BAE2FF"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

// named export for this context (to be used via useContext elsewhere)
export const MyThemeContext = React.createContext(
    { theme: themes.light }
);

// provider wrapper. uses its own state to track which theme is in use
// use it in App.jsx like <MyThemeProvider>...</MyThemeProvider>
export default function MyThemeProvider(props) {
    const [theme, setTheme] = React.useState(themes.light);
    
    // helper boolean to tell if we’re currently in dark mode
    const darkMode = theme.background === themes.dark.background;
    return (
        <MyThemeContext.Provider value={{ theme, setTheme, darkMode }}>
            {props.children}
        </MyThemeContext.Provider>
    );
}
// ++ Try to use this context to style some existing components
// ++ Try to add a component with a button/checkbox to switch themes