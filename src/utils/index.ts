import {
    useColorScheme,
  } from 'react-native';

export const checkTheme = ():boolean => {
    const isDarkMode = useColorScheme() == 'dark';
    return isDarkMode
} 