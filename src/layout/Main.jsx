import { Header, Footer } from "../components/layout";
import "../assets/css/layout.css";
import TailwindIndicator from "../components/TailwindIndicator";
import { useTranslation } from 'react-i18next';

const MainLayout = ({ children }) => {
  const { i18n } = useTranslation();
  const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

  return (
    <>
      <div className="main-container" dir={dir}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
        <TailwindIndicator/>
      </div>
    </>
  );
};
export default MainLayout