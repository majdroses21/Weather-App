import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ThemeControls } from "../ThemeControls";

const ThemeModal = ({ children }) => {
  return (
    <Dialog>
      {children ? <DialogTrigger asChild>{children}</DialogTrigger> : null}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>إعدادات التطبيق</DialogTitle>
          <DialogDescription>
            <ThemeControls />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ThemeModal;