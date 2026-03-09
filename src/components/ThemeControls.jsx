// components/ThemeControls.jsx
import { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Cloud, Wind, Sun, Moon, Languages  } from 'lucide-react';
// Other
import { useTranslation } from 'react-i18next';
export const ThemeControls = () => {
    const { currTheme, setCurrTheme, darkMode, toggleDarkMode } = useContext(ThemeContext);
    const { t, i18n } = useTranslation();
    const changelang = () => {
        if (i18n.language == 'en') {
            i18n.changeLanguage('ar');
        } else{
            i18n.changeLanguage('en');
        }
    }

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
            <Button onClick={changelang}> <Languages/>  { i18n.language == 'en' ? t('arabic') : t('english')} </Button>
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
                        <span className="font-semibold">{t('sky_theme')}</span>
                    </>
                ) : (
                    <>
                        <Wind className="w-5 h-5" />
                        <span className="font-semibold">{t('air_theme')}</span>
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
                        <span className="font-semibold">{t('night_mode')}</span>
                    </>
                ) : (
                    <>
                        <Sun className="w-5 h-5" />
                        <span className="font-semibold">{t('day_mode')}</span>
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