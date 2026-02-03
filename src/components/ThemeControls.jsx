// components/ThemeControls.jsx
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Cloud, Wind, Sun, Moon } from 'lucide-react';

export const ThemeControls = () => {
    const { currTheme, setCurrTheme, darkMode, toggleDarkMode } = useContext(ThemeContext);
    
    const toggleTheme = () => {
        setCurrTheme(currTheme === 'samaa' ? 'hawaa' : 'samaa');
    };
     const handleToggleTheme = () => {
        const newTheme = currTheme === 'samaa' ? 'hawaa' : 'samaa';
        console.log('Toggling theme from', currTheme, 'to', newTheme);
        setCurrTheme(newTheme);
    };

    const handleToggleDarkMode = () => {
        console.log('Toggling dark mode from', darkMode, 'to', !darkMode);
        toggleDarkMode();
    };

    return (
        <div className="flex items-center gap-3">
            {/* زر تبديل الثيم */}
            <Button 
                onClick={handleToggleTheme}
                variant="outline"
                size="lg"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-theme"
            >
                {currTheme === 'samaa' ? (
                    <>
                        <Cloud className="w-5 h-5" />
                        <span className="font-semibold">السماء 🌤️</span>
                    </>
                ) : (
                    <>
                        <Wind className="w-5 h-5" />
                        <span className="font-semibold">الهواء 💨</span>
                    </>
                )}
            </Button>

            {/* زر تبديل الدارك مود */}
            <Button 
                onClick={handleToggleDarkMode}
                variant="outline"
                size="lg"
                className="gap-2 hover:bg-accent transition-all shadow-theme"
            >
                {darkMode ? (
                    <>
                        <Moon className="w-5 h-5" />
                        <span className="font-semibold">ليلي 🌙</span>
                    </>
                ) : (
                    <>
                        <Sun className="w-5 h-5" />
                        <span className="font-semibold">نهاري ☀️</span>
                    </>
                )}
            </Button>
            
            {/* للتجربة - عرض الحالة الحالية */}
            {/* <div className="text-sm text-muted-foreground">
                <div>Theme: {currTheme}</div>
                <div>Mode: {darkMode ? 'Dark' : 'Light'}</div>
            </div> */}
        </div>
    );
};