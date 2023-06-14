// import React, { createContext, useState } from 'react';
// import { Provider as PaperProvider, MD3DarkTheme, DefaultTheme } from 'react-native-paper';

// // Créez le contexte du thème
// export const ThemeContext = createContext({
//   theme: DefaultTheme,
//   toggleTheme: () => {},
// });

// // Créez le composant du fournisseur de thème
// export const ThemeProvider: React.FC = ({ children }) => {
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   // Basculez entre le thème sombre et le thème clair
//   const toggleTheme = () => {
//     setIsDarkTheme((prevState) => !prevState);
//   };

//   // Sélectionnez le thème en fonction de isDarkTheme
//   const theme = isDarkTheme ? MD3DarkTheme : DefaultTheme;

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <PaperProvider theme={theme}>{children}</PaperProvider>
//     </ThemeContext.Provider>
//   );
// };
