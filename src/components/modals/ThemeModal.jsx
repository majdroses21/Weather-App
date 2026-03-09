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
  return (
    <Dialog>
      {children ? <DialogTrigger asChild>{children}</DialogTrigger> : null}
      <DialogContent>
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