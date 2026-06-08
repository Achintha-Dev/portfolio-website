import { useContext } from 'react';
import ThemeContext from '../contex/ThemeContext';

export function useTheme() {
    return useContext(ThemeContext);
}