import { createContext, type ParentComponent, useContext } from "solid-js";

const DEFAULT_THEME = {
  colors: {
    tile: {
      background: "beige",
      border: "black",
      color: "black",
      concealed: "green",
    },
  },
} as const;

const ThemeContext = createContext<typeof DEFAULT_THEME>(DEFAULT_THEME);

export const ThemeContextProvider: ParentComponent = ({ children }) => {
  return (
    <ThemeContext.Provider value={DEFAULT_THEME}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}
