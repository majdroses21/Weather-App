import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ThemeControls } from "../ThemeControls";
// Other
import { useTranslation } from 'react-i18next';
const ThemeModal = ({ children }) => {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  return (
    <Dialog dir={dir}>
      {children ? <DialogTrigger asChild>{children}</DialogTrigger> : null}
      <DialogContent  dir={dir}>
        <DialogHeader>
          <DialogTitle> {t('app_setting')} </DialogTitle>
          <DialogDescription>
            <ThemeControls />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ThemeModal;