import {
  createContext,
  type JSX,
  type ParentComponent,
  useContext,
} from "solid-js";

const DEFAULT_THEME = {
  colors: {
    tile: {
      background: "beige",
      border: "black",
      concealed: "green",
      typography: "black",
    },
  },
  components: {
    tile: {
      small: {
        style: {
          height: "20px",
          width: "15px",
          "font-size": "0.25em",
          border: "1px solid",
          "border-radius": "3px",
        } as JSX.CSSProperties,
      },
      medium: {
        style: {
          height: "39px",
          width: "30px",
          "font-size": "0.5em",
          border: "2px solid",
          "border-radius": "5px",
        } as JSX.CSSProperties,
      },
      large: {
        style: {
          height: "78px",
          width: "60px",
          "font-size": "1em",
          border: "6px solid",
          "border-radius": "10px",
        } as JSX.CSSProperties,
      },
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
