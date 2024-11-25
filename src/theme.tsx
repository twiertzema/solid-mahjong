import { createContext, type ParentComponent, useContext } from "solid-js";

const TILE_COLORS = {
  background: "beige",
  border: "black",
  concealed: "green",
  typography: "black",
} as const;

const DEFAULT_THEME = {
  colors: {
    tile: TILE_COLORS,
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
