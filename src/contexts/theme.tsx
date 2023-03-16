import React, { PropsWithChildren } from "react";

export type ThemeType = "light" | "dark";

type ThemeContextType = {
    theme: ThemeType;
    setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};

const ThemeContext = React.createContext<ThemeContextType>({
    theme: "light",
    setTheme: () => {},
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = React.useState<ThemeType>("dark");

    React.useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme) {
            setTheme(theme as ThemeType);
        }
    }, []);

    React.useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);
